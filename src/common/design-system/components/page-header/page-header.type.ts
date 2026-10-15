import type { ReactNode } from "react";

export interface PageHeaderProps {
  title: ReactNode;
  /** 제목 아래 한 줄 설명 */
  lead?: ReactNode;
  /** 제목 위 작은 영역 (브레드크럼, 뒤로 가기 링크 등) */
  eyebrow?: ReactNode;
}
