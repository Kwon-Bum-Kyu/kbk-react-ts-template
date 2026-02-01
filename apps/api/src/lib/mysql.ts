import mysql from "mysql2/promise";
import { env } from "../config/env";

/**
 * MySQL Connection Pool
 */
export const pool = mysql.createPool({
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,

  // Connection Pool 설정
  connectionLimit: 10, // 최대 연결 수
  maxIdle: 10, // 최대 유휴 연결 수
  idleTimeout: 60000, // 유휴 연결 타임아웃 (60초)
  waitForConnections: true, // 연결 대기
  queueLimit: 0, // 대기 큐 제한 없음

  // Keep-Alive 설정
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

/**
 * Graceful Shutdown
 * 프로세스 종료 시 모든 연결을 정리합니다.
 */
process.on("SIGINT", async () => {
  console.log("Closing MySQL connection pool...");
  await pool.end();
  console.log("MySQL connection pool closed");
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("Closing MySQL connection pool...");
  await pool.end();
  console.log("MySQL connection pool closed");
  process.exit(0);
});
