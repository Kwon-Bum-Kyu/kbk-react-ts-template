# Backend API Setup & Development Guide

## 🛠 Prerequisites

- Node.js >= 20
- MySQL >= 8.0
- Docker (optional, for local DB)

## 🚀 Getting Started

### 1. Database Setup

You can start a local MySQL instance using Docker:

```bash
docker run --name kbk-mysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=myapp -p 3306:3306 -d mysql:8
```

### 2. Environment Variables

Check `.env` file (create if not exists based on `.env.example`).

### 3. Run Migrations

Before running the server, apply database migrations:

```bash
npm run migrate
```

### 4. Start Server

```bash
npm run dev
```

## 🏗 Architecture

This project follows a **Layered Architecture** with **Repository Pattern**.

- **Controllers** (`src/controllers`): Handle HTTP requests and responses.
- **Services** (`src/services`): Contain business logic.
- **Repositories** (`src/repositories`): Handle direct database interactions (Raw SQL).
- **Routes** (`src/routes`): Define API endpoints.

## 🧪 Testing

We prioritize **Integration Tests** to ensure database interactions work correctly.

```bash
npm run test
```
