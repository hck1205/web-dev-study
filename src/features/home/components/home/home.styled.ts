import styled from "@emotion/styled";
import { color, font, radius, space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";

export const Hero = styled.section`
  padding: ${space[12]} 0 ${space[10]};

  ${media.tablet} {
    padding: ${space[20]} 0 ${space[16]};
  }
`;

export const Eyebrow = styled.p`
  margin-bottom: ${space[4]};
  color: ${color.accent};
  font-size: ${font.size.sm};
  font-weight: ${font.weight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const HeroTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: ${font.weight.extrabold};
  line-height: ${font.leading.tight};
  letter-spacing: -0.04em;
  text-wrap: balance;

  ${media.tablet} {
    font-size: 3.25rem;
  }
  ${media.desktop} {
    font-size: 4rem;
  }

  em {
    color: ${color.accent};
    font-style: normal;
  }
`;

export const HeroLead = styled.p`
  max-width: 36rem;
  margin-top: ${space[5]};
  color: ${color.textMuted};
  font-size: ${font.size.lg};
  line-height: ${font.leading.relaxed};
  word-break: keep-all;

  ${media.tablet} {
    font-size: ${font.size.xl};
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[3]};
  margin-top: ${space[8]};
`;

export const Section = styled.section`
  padding: ${space[8]} 0;
`;

export const SectionHead = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: ${space[5]};

  h2 {
    font-size: ${font.size["2xl"]};
    font-weight: ${font.weight.bold};
    letter-spacing: -0.03em;
  }
  a {
    font-size: ${font.size.sm};
    font-weight: ${font.weight.semibold};
    text-decoration: none;
  }
`;

export const CategoryGrid = styled.div`
  display: grid;
  gap: ${space[3]};
  grid-template-columns: repeat(1, minmax(0, 1fr));

  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${space[4]};
  }
  ${media.desktop} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const CategoryName = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${font.size.lg};
  font-weight: ${font.weight.bold};
  color: ${color.text};
`;

export const CategoryCount = styled.span`
  padding: 0.125rem 0.5rem;
  border-radius: ${radius.full};
  background: ${color.accentSoft};
  color: ${color.accent};
  font-size: ${font.size.xs};
  font-weight: ${font.weight.semibold};
`;

export const CategoryDesc = styled.p`
  margin-top: ${space[2]};
  color: ${color.textMuted};
  font-size: ${font.size.sm};
`;

export const PostGrid = styled.div`
  display: grid;
  gap: ${space[4]};

  ${media.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${space[5]};
  }
  ${media.desktop} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
