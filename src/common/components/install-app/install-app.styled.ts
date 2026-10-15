import styled from "@emotion/styled";
import { anim, color, font, motion, radius, space } from "@/common/design-system";

export const InstallButton = styled.button`
  min-height: 2.75rem;
  padding: 0 ${space[4]};
  border: 1px solid ${color.border};
  border-radius: ${radius.full};
  background: ${color.surface};
  color: ${color.text};
  font: inherit;
  font-weight: ${font.weight.semibold};
  cursor: pointer;
  animation: ${anim.fadeUp} 360ms ${anim.easing.out} both;
  transition:
    border-color ${motion.fast},
    color ${motion.fast};

  &:hover {
    border-color: ${color.accent};
    color: ${color.accent};
  }
`;

export const Hint = styled.span`
  color: ${color.textSubtle};
  font-size: ${font.size.xs};
`;
