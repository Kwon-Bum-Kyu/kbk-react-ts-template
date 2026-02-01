import type { ViteUserConfig } from "vitest/config";

type TestConfig = ViteUserConfig["test"];

/**
 * 공통 Vitest 설정
 * 모든 패키지에서 공유하는 기본 설정
 */
export const baseConfig: TestConfig = {
  globals: true,
  passWithNoTests: true,
  testTimeout: 10000,
};

/**
 * Node.js 환경 테스트 설정 (API, 서버 등)
 */
export const nodeConfig: TestConfig = {
  ...baseConfig,
  environment: "node",
};

/**
 * Browser 환경 테스트 설정 (React 컴포넌트 등)
 * Playwright를 사용한 실제 브라우저 테스트
 */
export const browserConfig: TestConfig = {
  ...baseConfig,
  browser: {
    enabled: true,
    provider: "playwright",
    headless: true,
    instances: [{ browser: "chromium" }],
  },
};

/**
 * React Unit 테스트 설정 (JSDOM)
 * 브라우저 없이 빠른 컴포넌트 로직 검증용
 */
export const reactConfig: TestConfig = {
  ...baseConfig,
  environment: "jsdom",
};

/**
 * JSDOM 환경 테스트 설정 (가벼운 DOM 테스트)
 */
export const jsdomConfig: TestConfig = {
  ...baseConfig,
  environment: "jsdom",
};
