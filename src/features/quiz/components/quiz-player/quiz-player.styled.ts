import styled from "@emotion/styled";
import { anim, space } from "@/common/design-system";

export const Intro = styled.section`
  display: grid;
  gap: ${space[5]};
  justify-items: start;
  animation: ${anim.fadeUp} 400ms ${anim.easing.out} both;
`;
