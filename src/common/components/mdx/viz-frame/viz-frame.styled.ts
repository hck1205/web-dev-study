import styled from "@emotion/styled";
import { color, font, radius, space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";

// 모바일: 본문 좌우 여백까지 펼쳐 그림을 최대한 크게 / tablet 이상: 둥근 테두리 카드
export const Figure = styled.figure`
  margin: ${space[6]} calc(-1 * ${space[4]});
  overflow: hidden;
  border: solid ${color.border};
  border-width: 1px 0;
  background: ${color.surface};

  ${media.tablet} {
    margin: ${space[6]} 0;
    border-width: 1px;
    border-radius: ${radius.lg};
  }
`;

export const Caption = styled.figcaption<{ at: "top" | "bottom" }>`
  padding: ${space[3]} ${space[4]};
  border-${({ at }) => (at === "top" ? "bottom" : "top")}: 1px solid ${color.border};
  color: ${color.textMuted};
  font-size: ${font.size.sm};
  word-break: keep-all;
`;
