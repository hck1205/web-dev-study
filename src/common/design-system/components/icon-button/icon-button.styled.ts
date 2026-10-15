import styled from "@emotion/styled";
import { color, motion, radius } from "../../tokens";

// 터치 영역 44px 이상
export const Root = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  border: 0;
  border-radius: ${radius.md};
  background: transparent;
  color: ${color.textMuted};
  cursor: pointer;
  transition:
    background ${motion.fast},
    color ${motion.fast};

  &:hover {
    background: ${color.surfaceHover};
    color: ${color.text};
  }
`;
