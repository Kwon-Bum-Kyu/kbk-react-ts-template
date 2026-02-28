import path from 'path';
import { cleanEnv, str, num } from 'envalid';
import { config } from 'dotenv';

config({ path: path.resolve(process.cwd(), '../../.env') });

export const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'test', 'production'], default: 'development' }),
  PORT: num({ default: 4000 }),
  DATABASE_URL: str(),
});