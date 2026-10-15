export interface CrumbItem {
  label: string;
  /** 없으면 링크 없이 글자만 보인다 */
  href?: string;
}

export interface CrumbLinksProps {
  items: CrumbItem[];
}
