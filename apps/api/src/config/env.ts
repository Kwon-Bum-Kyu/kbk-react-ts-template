import { cleanEnv, str, num, host } from 'envalid';
import { config } from 'dotenv';

config();

export const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'test', 'production'], default: 'development' }),
  PORT: num({ default: 4000 }),
  DB_HOST: host({ default: 'localhost' }),
  DB_PORT: num({ default: 3306 }),
  DB_USER: str({ default: 'root' }),
  DB_PASSWORD: str({ default: '' }),
  DB_NAME: str({ default: 'myapp' }),
});