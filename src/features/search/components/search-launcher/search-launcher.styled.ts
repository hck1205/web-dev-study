import styled from "@emotion/styled";
import Link from "next/link";
import { color, font, motion, radius, shadow, space, zIndex } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: ${zIndex.overlay};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: rgb(2 6 23 / 0.55);
  backdrop-filter: blur(2px);

  ${media.tablet} {
    padding: 10vh ${space[6]} 0;
  }
`;

// 모바일: 전체 화면 시트 / tablet 이상: 가운데 모달
export const Panel = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
  background: ${color.surface};

  ${media.tablet} {
    width: min(40rem, 100%);
    height: auto;
    max-height: 70vh;
    border: 1px solid ${color.border};
    border-radius: ${radius.xl};
    box-shadow: ${shadow.lg};
    overflow: hidden;
  }
`;

export const InputRow = styled.div`
  display: flex;
  gap: ${space[2]};
  align-items: center;
  padding: 0 ${space[2]} 0 ${space[4]};
  border-bottom: 1px solid ${color.border};
  color: ${color.textSubtle};
`;

export const Input = styled.input`
  flex: 1;
  min-width: 0;
  height: 3.5rem;
  border: 0;
  background: transparent;
  color: ${color.text};
  font: inherit;
  font-size: 1rem; /* 16px 미만이면 iOS Safari가 포커스 시 확대한다 */
  outline: none;

  &::placeholder {
    color: ${color.textSubtle};
  }
`;

export const Body = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${space[2]};
`;

export const Hint = styled.p`
  padding: ${space[3]} ${space[3]} ${space[2]};
  color: ${color.textSubtle};
  font-size: ${font.size.sm};
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]};
  padding: ${space[1]} ${space[3]} ${space[4]};
`;

export const ResultList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ResultLink = styled(Link, { shouldForwardProp: (prop) => prop !== "active" })<{ active: boolean }>`
  display: block;
  padding: ${space[3]};
  border-radius: ${radius.md};
  background: ${({ active }) => (active ? color.accentSoft : "transparent")};
  color: ${color.text};
  text-decoration: none;
  transition: background ${motion.fast};

  &:hover {
    color: ${color.text};
    background: ${({ active }) => (active ? color.accentSoft : color.surfaceHover)};
  }
`;

export const ResultTitle = styled.span`
  display: block;
  font-weight: ${font.weight.semibold};
`;

export const ResultMeta = styled.span`
  display: block;
  margin-top: ${space[1]};
  overflow: hidden;
  color: ${color.textSubtle};
  font-size: ${font.size.xs};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Empty = styled.p`
  padding: ${space[8]} ${space[3]};
  color: ${color.textSubtle};
  text-align: center;
`;
