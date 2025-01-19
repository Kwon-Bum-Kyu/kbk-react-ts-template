import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { cn } from "@/utils/tailwind.ts";

type Error = {
  status: number;
  statusText: string;
  internal: boolean;
  data: string;
  error: object;
};

// const render = (error: Error) => {
//   const { status, statusText } = error;

//   switch (status) {
//     case 404:
//       return <div>{statusText}</div>;
//     default:
//       return <div>{statusText}</div>;
//   }
// };

type ErrorPageProps = {
  isError?: boolean;
  text?: string;
  className?: string;
};

/**
 * 라우팅 에러를 처리하는 페이지
 */
const ErrorPage = ({ isError, className }: ErrorPageProps) => {
  const error = useRouteError() as Error;
  isError = isError || isRouteErrorResponse(error);

  if (!isError) return;

  return (
    <div
      id="error-page"
      className={cn(
        "flex h-[100vh] w-[100vw] flex-col items-center justify-center text-center",
        className,
      )}
    >
      <h3 className="mt-[28px] text-[18px] font-bold">
        찾으시는 페이지가 없습니다.
      </h3>
      <p className="text-gray-750 c-b2 mt-[16px] w-[480px]">
        페이지가 삭제되었거나 주소가 변경되어 요청하신 페이지를 찾을 수
        없습니다. 입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
      </p>
    </div>
  );
};

export default ErrorPage;
