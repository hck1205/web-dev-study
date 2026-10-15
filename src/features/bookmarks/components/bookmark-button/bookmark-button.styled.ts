import styled from "@emotion/styled";
import { anim, color, font, motion, radius, space } from "@/common/design-system";

// 글 목록에서는 제목 링크가 줄 전체를 덮으므로, 버튼을 그 위로 올려야 눌린다.
export const Root = styled("button", { shouldForwardProp: (prop) => prop !== "active" })<{ active: boolean }>`
  position: relative;
  z-index: 1;
  display: inline-flex;
  flex: none;
  gap: ${space[1]};
  align-items: center;
  justify-content: center;
  min-width: 2.75rem;
  min-height: 2.75rem;
  padding: 0 ${space[2]};
  border: 0;
  border-radius: ${radius.md};
  background: transparent;
  color: ${({ active }) => (active ? color.warning : color.textSubtle)};
  font-size: ${font.size.sm};
  font-weight: ${font.weight.semibold};
  cursor: pointer;
  transition:
    background ${motion.fast},
    color ${motion.fast};

  &:hover {
    background: ${color.surfaceHover};
    color: ${({ active }) => (active ? color.warning : color.text)};
  }

  svg {
    animation: ${({ active }) => (active ? anim.pop : "none")} 350ms ${anim.easing.out};
  }
`;
