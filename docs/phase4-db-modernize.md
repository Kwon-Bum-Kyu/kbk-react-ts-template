# Phase 4 — DB 현대화 & 배포 인프라

> 작업일: 2026-02-28
> 브랜치: `feature/db-modernize`

---

## 변경 요약

MySQL + mysql2/promise 직접 쿼리 방식을 **Prisma ORM + PostgreSQL(Neon)** 으로 전환하고, **Vercel 배포 인프라**를 구성했다. 동시에 템플릿 목적에 맞게 도메인 예시 코드(User, Product)를 전량 제거했다.

---

## 1. Prisma 도입

### 설치 패키지

| 패키지 | 위치 | 용도 |
|--------|------|------|
| `@prisma/client` | dependencies | Prisma ORM 클라이언트 |
| `@prisma/adapter-neon` | dependencies | Neon Serverless 어댑터 |
| `@neondatabase/serverless` | dependencies | Neon PostgreSQL 드라이버 |
| `prisma` | devDependencies | Prisma CLI |

### 파일 구조

```
apps/api/
├── prisma/
│   └── schema.prisma        # datasource + generator (모델 없음)
├── prisma.config.ts          # Prisma 설정 (루트 .env 참조)
├── generated/prisma/         # Prisma Client 생성물 (.gitignore)
└── src/
    └── lib/prisma.ts         # PrismaClient 싱글턴
```

### Prisma Client 싱글턴 (`src/lib/prisma.ts`)

- `@prisma/adapter-neon`의 `PrismaNeon`을 어댑터로 사용
- dev 환경에서 globalThis에 캐싱하여 HMR 시 재생성 방지
- `DATABASE_URL` 환경변수로 연결 문자열 주입

### 제거된 항목

- `mysql2` 패키지 의존성
- `src/lib/mysql.ts` (MySQL 커넥션 풀 싱글턴)
- `migrations/` 디렉터리 (SQL 마이그레이션 파일)
- `scripts/migrate.ts` (커스텀 마이그레이션 러너)

---

## 2. 환경변수 통합

### Before

```
apps/api/.env          → DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME
apps/web/.env          → VITE_API_BASE_URL
apps/web/.env.storybook → VITE_STORYBOOK_MODE, VITE_ENABLE_MOCK_API, ...
```

### After

```
루트/.env.example      → 모든 환경변수 통합 (git 추적됨)
루트/.env              → cp .env.example .env 로 생성 (git 무시)
```

### 각 앱의 .env 참조 방식

| 앱 | 방식 | 설정 위치 |
|----|------|-----------|
| `apps/api` | `dotenv({ path: "../../.env" })` | `src/config/env.ts` |
| `apps/api` (Prisma) | `dotenv({ path: "../../.env" })` | `prisma.config.ts` |
| `apps/web` | `envDir: "../../"` | `vite.config.ts` |
| `apps/storybook` | `loadEnv("development", rootDir)` | `.storybook/main.ts` |

### 환경 분리 전략

- **로컬**: `cp .env.example .env` → dotenv로 로드
- **dev / staging / prod**: `.env` 사용하지 않음 → 배포 플랫폼(Vercel 등)의 Environment Variables에서 직접 주입

---

## 3. Vercel 배포 설정

별도 프로젝트 2개 방식으로 구성.

### apps/web (Static Hosting)

```json
// apps/web/vercel.json
{
  "buildCommand": "cd ../.. && npx turbo run build --filter=web",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### apps/api (Serverless Function)

```json
// apps/api/vercel.json
{
  "buildCommand": "cd ../.. && npx turbo run build --filter=api",
  "rewrites": [
    { "source": "/(.*)", "destination": "/api" }
  ]
}
```

- `apps/api/api/index.ts` — Express app을 default export하는 Serverless 엔트리포인트

---

## 4. 도메인 예시 코드 제거

템플릿 목적에 맞게 특정 도메인(User, Product) 코드를 전량 제거.

### 삭제된 파일

| 파일 | 내용 |
|------|------|
| `apps/api/src/repositories/user.repository.ts` | User CRUD Prisma 쿼리 |
| `apps/api/src/services/user.service.ts` | User 비즈니스 로직 |
| `apps/api/src/controllers/user.controller.ts` | User HTTP 핸들러 |
| `apps/api/src/routes/user.routes.ts` | User Express 라우트 |
| `apps/web/src/services/userService.ts` | FE User API 호출 |
| `apps/web/src/services/authService.ts` | FE Auth 서비스 |
| `apps/web/src/services/index.ts` | 서비스 배럴 익스포트 |
| `packages/shared-types/src/entities.ts` | User, Product 인터페이스 |

### 수정된 파일

| 파일 | 변경 |
|------|------|
| `prisma/schema.prisma` | User, Product 모델 제거 → 빈 스키마 |
| `shared-types/src/api.ts` | User 관련 타입 제거 → `ApiResponse<T>`, `PaginationParams`만 유지 |
| `shared-types/src/index.ts` | entities.ts 재export 제거 |
| `apps/api/src/app.ts` | userRoutes import/사용 제거 |
| `apps/web/src/config/api.ts` | AUTH, USERS 엔드포인트 제거 → 빈 객체 |

### 유지된 인프라 코드

- Express 앱 설정 (CORS, JSON parser, health check, error handler)
- Prisma Client 싱글턴
- envalid 환경변수 검증
- API 클라이언트 체인 (`apiClient.ts`, `api.ts`, `useApi.ts`, `useMutation.ts`)
- 레이어드 아키텍처 디렉터리 구조 (빈 상태, 추후 코드 추가 예정)

---

## 5. Turbo Pipeline 변경

```jsonc
// turbo.json
{
  "migrate": {
    "inputs": ["prisma/schema.prisma", "prisma/migrations/**"],  // 기존: migrations/**/*.sql
    "cache": false
  },
  "db:generate": {  // 신규
    "inputs": ["prisma/schema.prisma"],
    "outputs": ["generated/prisma/**"],
    "cache": false
  }
}
```

---

## 6. package.json scripts 변경 (apps/api)

| Before | After |
|--------|-------|
| `"migrate": "tsx scripts/migrate.ts"` | `"migrate": "prisma migrate dev"` |
| `"seed": "node scripts/seed.js"` | `"seed": "prisma db seed"` |
| — | `"migrate:deploy": "prisma migrate deploy"` |
| — | `"db:generate": "prisma generate"` |

---

## 7. 검증 결과

| 검증 항목 | 결과 |
|-----------|------|
| `npm run typecheck` | 전체 통과 |
| `npm run test` | 전체 통과 (api 1건 + web 66건) |
| `npm run build` | 전체 통과 (api + web + storybook) |
| `npx prisma validate` | 스키마 유효 |

---

## 8. 잔여 작업

- [ ] SPEC.local.md 업데이트 (도메인 코드 제거 정책, Phase 4 완료 반영)
- [ ] Neon DB 프로젝트 생성 → `DATABASE_URL` 연결 검증
- [ ] `prisma migrate dev` 실행하여 마이그레이션 동작 확인
- [ ] Vercel 프로젝트 생성 및 실제 배포 검증
