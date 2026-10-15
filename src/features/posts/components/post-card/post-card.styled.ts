import styled from "@emotion/styled";
import { color, font, space } from "@/common/design-system";

export const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]};
  margin-bottom: ${space[3]};
`;

export const Title = styled.h3`
  font-size: ${font.size.xl};
  font-weight: ${font.weight.bold};
  line-height: ${font.leading.snug};
  color: ${color.text};
`;

export const Summary = styled.p`
  display: -webkit-box;
  margin-top: ${space[2]};
  overflow: hidden;
  color: ${color.textMuted};
  font-size: ${font.size.sm};
  line-height: ${font.leading.normal};
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[1]} ${space[3]};
  margin-top: ${space[4]};
  color: ${color.textSubtle};
  font-size: ${font.size.xs};
`;
