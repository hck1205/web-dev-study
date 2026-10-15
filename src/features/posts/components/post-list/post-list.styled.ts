import styled from "@emotion/styled";
import Link from "next/link";
import { color, font, motion, radius, space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";

export const Page = styled.div`
  padding: ${space[8]} 0 0;

  ${media.tablet} {
    padding-top: ${space[12]};
  }
`;

export const Title = styled.h1`
  font-size: ${font.size["3xl"]};
  font-weight: ${font.weight.extrabold};
  letter-spacing: -0.03em;

  ${media.tablet} {
    font-size: ${font.size["4xl"]};
  }
`;

export const Lead = styled.p`
  margin-top: ${space[2]};
  color: ${color.textMuted};
`;

// 모바일에서 칩이 많아져도 줄바꿈 없이 가로 스크롤
export const Chips = styled.nav`
  display: flex;
  gap: ${space[2]};
  margin: ${space[6]} calc(-1 * ${space[4]});
  padding: 0 ${space[4]};
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  ${media.tablet} {
    margin: ${space[6]} 0;
    padding: 0;
    flex-wrap: wrap;
  }
`;

export const Chip = styled(Link, { shouldForwardProp: (prop) => prop !== "active" })<{ active: boolean }>`
  display: inline-flex;
  flex: none;
  gap: ${space[2]};
  align-items: center;
  min-height: 2.5rem;
  padding: 0 ${space[4]};
  border: 1px solid ${({ active }) => (active ? color.accent : color.border)};
  border-radius: ${radius.full};
  background: ${({ active }) => (active ? color.accentSoft : color.surface)};
  color: ${({ active }) => (active ? color.accent : color.textMuted)};
  font-size: ${font.size.sm};
  font-weight: ${font.weight.semibold};
  text-decoration: none;
  transition:
    background ${motion.fast},
    border-color ${motion.fast};

  &:hover {
    color: ${({ active }) => (active ? color.accent : color.text)};
    border-color: ${color.borderStrong};
  }
`;

export const Count = styled.span`
  color: ${color.textSubtle};
  font-size: ${font.size.xs};
  font-weight: ${font.weight.medium};
`;

export const Grid = styled.div`
  display: grid;
  gap: ${space[4]};

  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${space[5]};
  }
`;

export const Empty = styled.p`
  padding: ${space[12]} 0;
  color: ${color.textSubtle};
  text-align: center;
`;
