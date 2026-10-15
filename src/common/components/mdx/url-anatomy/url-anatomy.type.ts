export interface UrlParam {
  key: string;
  value: string;
  /** 설명 패널의 제목 (쉬운 말) */
  title: string;
  description: string;
  required?: boolean;
}

export interface UrlAnatomyProps {
  /** ? 앞부분 (예: "https://auth.example.com/authorize") */
  base: string;
  params: UrlParam[];
  caption?: string;
}
