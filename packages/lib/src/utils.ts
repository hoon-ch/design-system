import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { UseFormReturn } from "react-hook-form";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number | Date): string {
  let date: Date;
  if (!(input instanceof Date)) {
    date = new Date(input);
  } else {
    date = input;
  }
  return date.toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

// react hook form - Controller 사용시 reset 주의 사항:
// 1. default 값을 미리 선언해줘야한다.
// 2. reset 함수안에 reset하고 싶은 field값을 선언해준다.
// 수많은 field의 default값/reset값을 한땀한땀  선언하는 일만큼 귀찮은일이없다..
// 아래 함수는 선언한 useForm object를 넘겨주면, 선언된 field를 모두 추출해서, 빈값("")이 든 resetObject를 반환해준다.
export const generateFormResetObject = <
  TFieldValues extends Record<string, any>,
>(
  _rhform: UseFormReturn<TFieldValues>
) => {
  const clearObject = Object.fromEntries(
    Object.keys(_rhform.getValues()).map((key) => [key, ""])
  );

  return clearObject;
};
