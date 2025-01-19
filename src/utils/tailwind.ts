import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 다양한 자료구조의 tailwindCSS className을 병합하여 하나의 문자열로 만드는 함수
 * 충돌 및 중복되는 className은 가장 마지막에 부여된 className을 적용
 *
 * ex)
 * const isActive = true;
 * const isError = false;
 * const className = cn({ 'bg-green-500': isActive, 'bg-red-500': isError }, 'text-white');
 * ->
 * 'bg-red-500 px-4 text-white'
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
