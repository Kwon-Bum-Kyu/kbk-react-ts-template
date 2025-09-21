import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import ApiTest from "@/view/apiTest";

// Mock dependencies
vi.mock("@/components/examples/UserList", () => ({
  UserList: () => <div data-testid="user-list">Mocked UserList Component</div>,
}));

describe("ApiTest 페이지", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("페이지 렌더링", () => {
    it("페이지 제목과 설명이 표시되어야 한다", () => {
      render(<ApiTest />);

      expect(screen.getByText("API 통신 테스트 페이지")).toBeInTheDocument();
      expect(
        screen.getByText("API 코어 모듈을 사용한 실제 데이터 통신 테스트 페이지입니다.")
      ).toBeInTheDocument();
    });

    it("사용자 관리 테스트 섹션이 표시되어야 한다", () => {
      render(<ApiTest />);

      expect(screen.getByText("사용자 관리 테스트")).toBeInTheDocument();
      expect(
        screen.getByText("UserService와 API hooks를 사용한 CRUD 작업 테스트")
      ).toBeInTheDocument();
    });

    it("UserList 컴포넌트가 렌더링되어야 한다", () => {
      render(<ApiTest />);

      expect(screen.getByTestId("user-list")).toBeInTheDocument();
    });
  });

  describe("API 기능 설명 섹션", () => {
    it("구현된 기능 목록이 표시되어야 한다", () => {
      render(<ApiTest />);

      expect(screen.getByText("구현된 기능")).toBeInTheDocument();
      expect(screen.getByText("사용자 목록 조회 (페이지네이션)")).toBeInTheDocument();
      expect(screen.getByText("사용자 검색 기능")).toBeInTheDocument();
      expect(screen.getByText("사용자 삭제 (Mutation)")).toBeInTheDocument();
      expect(screen.getByText("로딩 상태 관리")).toBeInTheDocument();
      expect(screen.getByText("에러 핸들링")).toBeInTheDocument();
    });

    it("사용된 기술 목록이 표시되어야 한다", () => {
      render(<ApiTest />);

      expect(screen.getByText("사용된 기술")).toBeInTheDocument();
      expect(screen.getByText("useApi Hook (데이터 페칭)")).toBeInTheDocument();
      expect(screen.getByText("useMutation Hook (데이터 수정)")).toBeInTheDocument();
      expect(screen.getByText("UserService (API 서비스)")).toBeInTheDocument();
      expect(screen.getByText("TypeScript 타입 안전성")).toBeInTheDocument();
      expect(screen.getByText("자동 재시도 및 에러 처리")).toBeInTheDocument();
    });
  });

  describe("개발자 정보 섹션", () => {
    it("개발자 정보와 환경 설정 안내가 표시되어야 한다", () => {
      render(<ApiTest />);

      expect(screen.getByText("개발자 정보")).toBeInTheDocument();
      expect(
        screen.getByText("이 페이지는 실제 API 서버가 필요합니다.", { exact: false })
      ).toBeInTheDocument();
      expect(screen.getByText("VITE_API_BASE_URL")).toBeInTheDocument();
    });

    it("현재 API 설정이 표시되어야 한다", () => {
      render(<ApiTest />);

      expect(screen.getByText("현재 설정:")).toBeInTheDocument();
      // 환경 변수가 설정되지 않은 경우 기본값이 표시되어야 함
      expect(screen.getByText("http://localhost:8000/api")).toBeInTheDocument();
    });
  });

  describe("페이지 레이아웃", () => {
    it("적절한 CSS 클래스가 적용되어야 한다", () => {
      const { container } = render(<ApiTest />);

      const mainDiv = container.firstChild as HTMLElement;
      expect(mainDiv).toHaveClass("min-h-screen", "bg-gray-50");

      const containerDiv = mainDiv.querySelector(".container");
      expect(containerDiv).toHaveClass("mx-auto", "px-4", "py-8");
    });

    it("모든 섹션이 적절한 스타일링으로 렌더링되어야 한다", () => {
      render(<ApiTest />);

      const sections = screen.getAllByRole("generic").filter(
        (element) => element.classList.contains("bg-white") &&
                   element.classList.contains("rounded-lg")
      );

      expect(sections.length).toBeGreaterThan(0);
    });
  });
});