export interface UrlParam {
  key: string;
  /** 없으면 값 없는 속성(예: 쿠키의 HttpOnly)으로 보고 key만 표시한다 */
  value?: string;
  /** 조각에 보일 텍스트를 직접 정한다 (예: JWT의 각 부분). 없으면 key=value */
  display?: string;
  /** 설명 패널의 제목 */
  title: string;
  description: string;
  /** 설명 아래 코드 블록 (예: 디코딩한 JSON) */
  code?: string;
  required?: boolean;
}

export interface UrlAnatomyProps {
  /** 첫 조각 앞의 고정 부분 (예: "https://auth.example.com/authorize"). 없으면 생략 */
  base?: string;
  params: UrlParam[];
  /** base와 첫 조각 사이 (기본 "?"). 쿠키는 "; ", JWT는 "" */
  separator?: string;
  /** 조각 사이 (기본 "&"). 쿠키는 "; ", JWT는 "." */
  joiner?: string;
  caption?: string;
}
