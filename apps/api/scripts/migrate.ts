import fs from 'fs/promises';
import path from 'path';
import mysql from 'mysql2/promise';
import { env } from '../src/config/env';

async function migrate() {
  const connection = await mysql.createConnection({
    host: env.DB_HOST,
    port: env.DB_PORT,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    multipleStatements: true, // Allow multiple statements in one query
  });

  try {
    console.log('Connected to database.');

    // Create migrations table if not exists
    await connection.query(`
      CREATE TABLE IF NOT EXISTS _migrations (
        id INT AUTO_INCREMENT PRIMARY KEY,
        filename VARCHAR(255) NOT NULL,
        applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    const migrationsDir = path.join(process.cwd(), 'migrations');
    const files = await fs.readdir(migrationsDir);
    const sqlFiles = files.filter(f => f.endsWith('.sql')).sort();

    const [appliedRows] = await connection.query('SELECT filename FROM _migrations');
    const appliedMigrations = new Set((appliedRows as any[]).map(row => row.filename));

    for (const file of sqlFiles) {
      if (appliedMigrations.has(file)) {
        continue;
      }

      console.log(`Applying migration: ${file}`);
      const filePath = path.join(migrationsDir, file);
      const sql = await fs.readFile(filePath, 'utf-8');

      await connection.beginTransaction();
      try {
        await connection.query(sql);
        await connection.query('INSERT INTO _migrations (filename) VALUES (?)', [file]);
        await connection.commit();
        console.log(`Migration ${file} applied successfully.`);
      } catch (err) {
        await connection.rollback();
        console.error(`Failed to apply migration ${file}:`, err);
        throw err;
      }
    }

    console.log('All migrations applied.');
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  } finally {
    await connection.end();
  }
}

migrate();
