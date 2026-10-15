import type { ComponentPropsWithoutRef, ReactNode } from "react";

export interface IconButtonProps extends Omit<ComponentPropsWithoutRef<"button">, "children"> {
  /** 스크린리더용 이름 (필수) */
  label: string;
  children: ReactNode;
}
