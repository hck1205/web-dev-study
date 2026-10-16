import type { ComponentProps, ReactNode } from "react";

export type ChoiceChipProps = Omit<ComponentProps<"button">, "type"> & {
  selected: boolean;
  children: ReactNode;
  /** 오른쪽에 작게 붙는 개수 */
  count?: number;
};
