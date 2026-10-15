import { mediaUp } from "./utils";

export type { Breakpoint } from "./types";
export { BREAKPOINTS } from "./utils";

// 사용 예: styled.div`  padding: 1rem;  ${media.tablet} { padding: 2rem; }  `
export const media = {
  tablet: mediaUp("tablet"),
  desktop: mediaUp("desktop"),
};
