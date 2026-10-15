import styled from "@emotion/styled";
import { omitProps } from "@/common/styles/omit-props";
import * as anim from "../../motion";
import { color, font, radius } from "../../tokens";

const sizes = { sm: "1.375rem", md: "1.5rem" };

export const Root = styled("span", omitProps("pass", "size"))<{ pass: boolean; size: "sm" | "md" }>`
  display: inline-grid;
  flex: none;
  place-items: center;
  width: ${({ size }) => sizes[size]};
  height: ${({ size }) => sizes[size]};
  margin-top: 0.125rem;
  border-radius: ${radius.full};
  background: ${({ pass }) => (pass ? color.successSoft : color.dangerSoft)};
  color: ${({ pass }) => (pass ? color.success : color.danger)};
  font-size: ${font.size.xs};
  font-weight: ${font.weight.bold};
  animation: ${anim.pop} 380ms ${anim.easing.spring} both;
  animation-delay: inherit;
`;
