import styled from "@emotion/styled";
import { anim, color, font, radius, space } from "@/common/design-system";

export const Root = styled.div`
  padding: ${space[4]};
  border-top: 1px solid ${color.border};

  h4 {
    margin: 0 0 ${space[2]};
    font-size: ${font.size.base};
    font-weight: ${font.weight.bold};
    color: ${color.text};
  }
  p {
    margin: 0;
    color: ${color.textMuted};
    font-size: ${font.size.base};
    line-height: ${font.leading.relaxed};
    word-break: keep-all;
  }
  pre {
    margin: ${space[3]} 0 0;
    padding: ${space[3]};
    overflow-x: auto;
    border: 1px solid ${color.codeBorder};
    border-radius: ${radius.md};
    background: ${color.codeBg};
    font-family: ${font.mono};
    font-size: 0.75rem;
    line-height: 1.6;
    white-space: pre;
  }
`;

export const Body = styled.div`
  animation: ${anim.fadeUp} 300ms ${anim.easing.out};
`;
