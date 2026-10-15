export interface NavItem {
  label: string;
  href: string;
  /** 이 prefix로 시작하는 경로에서 활성 상태로 표시한다 */
  prefix: string;
}
