import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { UserList } from "@/components/examples/UserList";
import * as hooks from "@/hooks";

// Mock dependencies
vi.mock("@/hooks");

// Mock data
const mockUsers = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "user" as const,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "admin" as const,
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
];

const mockPaginatedUsers = {
  data: mockUsers,
  pagination: {
    page: 1,
    limit: 10,
    total: 2,
    totalPages: 1,
  },
};

describe("UserList 컴포넌트", () => {
  const mockUseApi = vi.mocked(hooks.useApi);
  const mockUseMutation = vi.mocked(hooks.useMutation);

  beforeEach(() => {
    vi.clearAllMocks();

    // Mock window.confirm
    vi.stubGlobal('confirm', vi.fn());
    vi.stubGlobal('alert', vi.fn());
  });

  describe("로딩 상태", () => {
    it("데이터를 불러오는 중일 때 로딩 메시지가 표시되어야 한다", () => {
      mockUseApi.mockReturnValue({
        data: null,
        loading: true,
        error: null,
        execute: vi.fn(),
        reset: vi.fn(),
        refetch: vi.fn(),
      });

      mockUseMutation.mockReturnValue({
        data: null,
        loading: false,
        error: null,
        mutate: vi.fn(),
        reset: vi.fn(),
        isLoading: false,
        isError: false,
        isSuccess: false,
      });

      render(<UserList />);

      expect(screen.getByText("사용자 목록을 불러오는 중...")).toBeInTheDocument();
    });
  });

  describe("에러 상태", () => {
    it("에러가 발생했을 때 에러 메시지와 재시도 버튼이 표시되어야 한다", () => {
      const mockError = {
        message: "네트워크 오류",
        code: "NETWORK_ERROR",
        timestamp: "2024-01-01T00:00:00Z",
      };

      const mockRefetch = vi.fn();

      mockUseApi.mockReturnValue({
        data: null,
        loading: false,
        error: mockError,
        execute: vi.fn(),
        reset: vi.fn(),
        refetch: mockRefetch,
      });

      mockUseMutation.mockReturnValue({
        data: null,
        loading: false,
        error: null,
        mutate: vi.fn(),
        reset: vi.fn(),
        isLoading: false,
        isError: false,
        isSuccess: false,
      });

      render(<UserList />);

      expect(screen.getByText(/오류가 발생했습니다: 네트워크 오류/)).toBeInTheDocument();

      const retryButton = screen.getByText("다시 시도");
      expect(retryButton).toBeInTheDocument();

      fireEvent.click(retryButton);
      expect(mockRefetch).toHaveBeenCalledTimes(1);
    });
  });

  describe("사용자 목록 표시", () => {
    beforeEach(() => {
      mockUseMutation.mockReturnValue({
        data: null,
        loading: false,
        error: null,
        mutate: vi.fn(),
        reset: vi.fn(),
        isLoading: false,
        isError: false,
        isSuccess: false,
      });
    });

    it("사용자 목록이 성공적으로 로드되면 사용자 정보가 표시되어야 한다", () => {
      mockUseApi.mockReturnValue({
        data: mockPaginatedUsers,
        loading: false,
        error: null,
        execute: vi.fn(),
        reset: vi.fn(),
        refetch: vi.fn(),
      });

      render(<UserList />);

      expect(screen.getByText("사용자 목록")).toBeInTheDocument();
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("john@example.com")).toBeInTheDocument();
      expect(screen.getByText("Jane Smith")).toBeInTheDocument();
      expect(screen.getByText("jane@example.com")).toBeInTheDocument();
      expect(screen.getByText("Role: user")).toBeInTheDocument();
      expect(screen.getByText("Role: admin")).toBeInTheDocument();
    });

    it("사용자가 없을 때 적절한 메시지가 표시되어야 한다", () => {
      mockUseApi.mockReturnValue({
        data: { data: [], pagination: { page: 1, limit: 10, total: 0, totalPages: 0 } },
        loading: false,
        error: null,
        execute: vi.fn(),
        reset: vi.fn(),
        refetch: vi.fn(),
      });

      render(<UserList />);

      expect(screen.getByText("사용자가 없습니다.")).toBeInTheDocument();
    });
  });

  describe("검색 기능", () => {
    it("검색어를 입력하고 검색 버튼을 클릭할 수 있어야 한다", () => {
      const mockRefetch = vi.fn();

      mockUseApi.mockReturnValue({
        data: mockPaginatedUsers,
        loading: false,
        error: null,
        execute: vi.fn(),
        reset: vi.fn(),
        refetch: mockRefetch,
      });

      mockUseMutation.mockReturnValue({
        data: null,
        loading: false,
        error: null,
        mutate: vi.fn(),
        reset: vi.fn(),
        isLoading: false,
        isError: false,
        isSuccess: false,
      });

      render(<UserList />);

      const searchInput = screen.getByPlaceholderText("사용자 검색...");
      const searchButton = screen.getByText("검색");

      fireEvent.change(searchInput, { target: { value: "John" } });
      expect(searchInput).toHaveValue("John");

      fireEvent.click(searchButton);
      expect(mockRefetch).toHaveBeenCalledTimes(1);
    });
  });

  describe("사용자 삭제 기능", () => {
    it("사용자 삭제 버튼을 클릭하면 확인 다이얼로그가 표시되어야 한다", () => {
      const mockMutate = vi.fn();
      const mockConfirm = vi.mocked(window.confirm);
      mockConfirm.mockReturnValue(false);

      mockUseApi.mockReturnValue({
        data: mockPaginatedUsers,
        loading: false,
        error: null,
        execute: vi.fn(),
        reset: vi.fn(),
        refetch: vi.fn(),
      });

      mockUseMutation.mockReturnValue({
        data: null,
        loading: false,
        error: null,
        mutate: mockMutate,
        reset: vi.fn(),
        isLoading: false,
        isError: false,
        isSuccess: false,
      });

      render(<UserList />);

      const deleteButtons = screen.getAllByText("삭제");
      fireEvent.click(deleteButtons[0]);

      expect(mockConfirm).toHaveBeenCalledWith("정말로 이 사용자를 삭제하시겠습니까?");
      expect(mockMutate).not.toHaveBeenCalled();
    });

    it("삭제 확인 후 mutation이 실행되어야 한다", () => {
      const mockMutate = vi.fn();
      const mockConfirm = vi.mocked(window.confirm);
      mockConfirm.mockReturnValue(true);

      mockUseApi.mockReturnValue({
        data: mockPaginatedUsers,
        loading: false,
        error: null,
        execute: vi.fn(),
        reset: vi.fn(),
        refetch: vi.fn(),
      });

      mockUseMutation.mockReturnValue({
        data: null,
        loading: false,
        error: null,
        mutate: mockMutate,
        reset: vi.fn(),
        isLoading: false,
        isError: false,
        isSuccess: false,
      });

      render(<UserList />);

      const deleteButtons = screen.getAllByText("삭제");
      fireEvent.click(deleteButtons[0]);

      expect(mockConfirm).toHaveBeenCalledWith("정말로 이 사용자를 삭제하시겠습니까?");
      expect(mockMutate).toHaveBeenCalledWith("1");
    });

    it("삭제 중일 때 버튼이 비활성화되고 로딩 텍스트가 표시되어야 한다", () => {
      mockUseApi.mockReturnValue({
        data: mockPaginatedUsers,
        loading: false,
        error: null,
        execute: vi.fn(),
        reset: vi.fn(),
        refetch: vi.fn(),
      });

      mockUseMutation.mockReturnValue({
        data: null,
        loading: true,
        error: null,
        mutate: vi.fn(),
        reset: vi.fn(),
        isLoading: true,
        isError: false,
        isSuccess: false,
      });

      render(<UserList />);

      const deleteButtons = screen.getAllByText("삭제 중...");
      expect(deleteButtons).toHaveLength(mockUsers.length);

      deleteButtons.forEach(button => {
        expect(button).toBeDisabled();
      });
    });
  });

  describe("페이지네이션", () => {
    it("페이지네이션 컨트롤이 표시되어야 한다", () => {
      const mockPaginatedUsersMultiPage = {
        ...mockPaginatedUsers,
        pagination: {
          page: 1,
          limit: 10,
          total: 25,
          totalPages: 3,
        },
      };

      mockUseApi.mockReturnValue({
        data: mockPaginatedUsersMultiPage,
        loading: false,
        error: null,
        execute: vi.fn(),
        reset: vi.fn(),
        refetch: vi.fn(),
      });

      mockUseMutation.mockReturnValue({
        data: null,
        loading: false,
        error: null,
        mutate: vi.fn(),
        reset: vi.fn(),
        isLoading: false,
        isError: false,
        isSuccess: false,
      });

      render(<UserList />);

      // 페이지네이션 버튼들 확인 (< > 기호와 페이지 번호들)
      expect(screen.getByText("<")).toBeInTheDocument();
      expect(screen.getByText(">")).toBeInTheDocument();
      expect(screen.getByText("1")).toBeInTheDocument();
      expect(screen.getByText("2")).toBeInTheDocument();
      expect(screen.getByText("3")).toBeInTheDocument();
    });

    it("첫 페이지에서 이전 버튼이 비활성화되어야 한다", () => {
      const mockPaginatedUsersMultiPage = {
        ...mockPaginatedUsers,
        pagination: {
          page: 1,
          limit: 10,
          total: 25,
          totalPages: 3,
        },
      };

      mockUseApi.mockReturnValue({
        data: mockPaginatedUsersMultiPage,
        loading: false,
        error: null,
        execute: vi.fn(),
        reset: vi.fn(),
        refetch: vi.fn(),
      });

      mockUseMutation.mockReturnValue({
        data: null,
        loading: false,
        error: null,
        mutate: vi.fn(),
        reset: vi.fn(),
        isLoading: false,
        isError: false,
        isSuccess: false,
      });

      render(<UserList />);

      const prevButton = screen.getByText("<");
      expect(prevButton).toBeDisabled();
    });
  });
});