# KBK React TypeScript 템플릿

Vite, Tailwind CSS, Storybook, 포괄적인 테스팅 환경을 포함한 현대적인 React TypeScript 템플릿입니다.

## 🚀 주요 기능

- **React 19** with TypeScript - 최신 컴포넌트 개발
- **Vite** - 빠른 개발 서버와 최적화된 빌드
- **Tailwind CSS** - 커스텀 디자인 시스템과 유틸리티 클래스
- **React Router DOM** - 클라이언트 사이드 라우팅
- **Storybook** - 컴포넌트 개발 및 문서화
- **포괄적인 테스팅** - Vitest, Playwright, Testing Library
- **ESLint** - TypeScript와 React hooks 지원
- **경로 별칭** - 깔끔한 import (`@/` → `src/`)

## 📋 사전 요구사항

- Node.js (18 버전 이상)
- npm 또는 yarn

## 🛠️ 템플릿 사용 방법

### 방법 1: degit 사용 (권장)

```bash
# degit를 사용한 프로젝트 생성
npx degit Kwon-Bum-Kyu/kbk-react-ts-template my-project
cd my-project
npm install
npm run dev
```

모든 방법으로 생성된 프로젝트는 `http://localhost:5173`에서 실행됩니다.

## 📜 사용 가능한 스크립트

### 핵심 개발

- `npm run dev` - 개발 서버 시작 (5173 포트)
- `npm run build` - 프로덕션 빌드 (TypeScript 컴파일 + Vite 빌드)
- `npm run preview` - 프로덕션 빌드 로컬 미리보기
- `npm run lint` - ESLint 자동 수정 실행

### 테스팅

- `npm run test` - Vitest로 Storybook 통합 + 단위 테스트 실행

### Storybook

- `npm run storybook` - Storybook 개발 서버 시작 (6006 포트)

## 🏗️ 프로젝트 아키텍처

### 기술 스택

| 기술             | 용도                                  |
| ---------------- | ------------------------------------- |
| React 19         | 동시성 기능을 가진 최신 UI 라이브러리 |
| TypeScript       | 타입 안정성 개발                      |
| Vite             | 빠른 빌드 도구와 개발 서버            |
| Tailwind CSS     | 유틸리티 우선 CSS 프레임워크          |
| React Router DOM | 클라이언트 사이드 라우팅              |
| Storybook        | 컴포넌트 개발 및 테스팅               |
| Vitest           | 단위 및 통합 테스팅                   |
| Playwright       | 브라우저 테스팅                       |

### 디렉토리 구조

```
src/
├── components/
│   ├── common/          # 재사용 가능한 UI 컴포넌트
│   │   ├── Button/      # 타입이 포함된 버튼 컴포넌트
│   │   ├── Input/       # 타입이 포함된 입력 컴포넌트
│   │   ├── Typography/  # 타이포그래피 시스템
│   │   └── ...          # 기타 공통 컴포넌트
│   ├── layouts/         # 레이아웃 컴포넌트
│   ├── Header/          # 헤더 컴포넌트
│   └── Footer/          # 푸터 컴포넌트
├── routes/              # 라우팅 설정
├── view/                # 페이지 컴포넌트
├── utils/               # 유틸리티 함수
├── types/               # TypeScript 타입 정의
└── config/              # 설정 파일

stories/                 # Storybook 스토리
tests/                   # 테스트 파일
```

## 🎨 스타일링 시스템

### Tailwind CSS 설정

이 프로젝트는 다음과 같은 커스텀 Tailwind CSS 설정을 사용합니다:

- **커스텀 컬러 팔레트**: 블루/그레이 시스템 컬러
- **타이포그래피 스케일**: 커스텀 폰트 크기 및 행간
- **반응형 브레이크포인트**:
  - 모바일: 640px
  - 태블릿: 768px
  - 데스크톱: 1440px
  - 와이드: 1920px

### 유틸리티 함수

- `src/utils/tailwind.ts`의 `cn()` 유틸리티를 사용하여 `clsx`와 `tailwind-merge`로 className 병합

## 🧪 테스팅 전략

### 단위 테스트

- `tests/` 디렉토리에 위치
- Testing Library와 함께 Vitest 사용
- Playwright provider로 브라우저 기반 테스팅

### Storybook 테스트

- Storybook과 Vitest 간의 통합
- 컴포넌트 테스팅을 위한 `@storybook/addon-vitest` 사용
- `composeStories`로 테스트에서 스토리 재사용

### 브라우저 테스트

- Playwright로 end-to-end 테스팅
- Chromium 브라우저 환경
- 시각적 회귀 테스팅 기능

### 테스트 네이밍 규칙

테스트 메소드 이름은 비즈니스 내용을 포함해야 합니다:

```javascript
// ❌ 나쁜 예
it("create article pending status", async () => {
  // test implementation
});

// ✅ 좋은 예
it("하루 글쓰기 횟수가 초과한 사용자가 작성할 경우, 작성된 글은 PENDING 상태가 된다.", async () => {
  // test implementation
});
```

## 🛣️ 라우팅

- React Router DOM의 `createBrowserRouter` 사용
- `src/routes/index.tsx`에서 `ROUTES` 객체로 라우트 상수 정의
- 에러 처리를 위한 전용 에러 페이지 컴포넌트

## 📦 빌드 설정

### TypeScript

- 다양한 환경을 위한 다중 설정 파일:
  - `tsconfig.json` - 기본 설정
  - `tsconfig.app.json` - 앱별 설정
  - `tsconfig.node.json` - Node.js 도구 설정

### Vite

- React 플러그인 활성화
- 경로 별칭 설정 (`@/` → `src/`)
- 최적화된 빌드 설정

### ESLint

- TypeScript 지원
- React hooks 규칙
- Storybook 통합

## 🧩 컴포넌트 개발

### 컴포넌트 구조

각 컴포넌트는 다음 패턴을 따릅니다:

```
ComponentName/
├── index.tsx      # 컴포넌트 구현
└── types.ts       # TypeScript 인터페이스
```

### Import 규칙

- `src/` 디렉토리에서 import할 때 `@/` 별칭 사용
- 상대 import보다 절대 import 선호
- 모든 공통 컴포넌트는 `src/components/common/index.ts`에서 export

## 🎭 Storybook 통합

- `stories/` 디렉토리에 스토리 위치
- 빠른 빌드를 위한 Vite 통합 설정
- 컴포넌트 테스팅을 위한 Vitest addon 포함
- `@/` import를 위한 커스텀 별칭 설정
- 접근성 addon 활성화

## 🤝 기여하기

1. 기존 코드 규칙 준수
2. 새 컴포넌트에 대한 테스트 작성
3. UI 컴포넌트에 대한 Storybook 스토리 업데이트
4. 커밋 전 린트 및 테스트 실행
5. 의미있는 커밋 메시지 사용
