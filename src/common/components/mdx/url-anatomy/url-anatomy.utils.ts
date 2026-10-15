import type { UrlParam } from "./url-anatomy.type";

/** 조각에 보일 텍스트: display > key=value > key */
export const chipText = (param: UrlParam) =>
  param.display ?? (param.value !== undefined && param.value !== "" ? `${param.key}=${param.value}` : param.key);
