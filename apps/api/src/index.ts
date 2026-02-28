import app from './app';
import { env } from './config/env';
import { prisma } from './lib/prisma';

const server = app.listen(env.PORT, () => {
  console.log(`Server is running on port ${env.PORT}`);
});

async function gracefulShutdown() {
  console.log('Closing Prisma connection...');
  await prisma.$disconnect();
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
}

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
