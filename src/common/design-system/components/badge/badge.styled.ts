import styled from "@emotion/styled";
import { color, font, radius } from "../../tokens";

export const Root = styled.span<{ fg: string; bg: string }>`
  display: inline-flex;
  align-items: center;
  height: 1.5rem;
  padding: 0 0.625rem;
  border: 1px solid ${color.border};
  border-radius: ${radius.full};
  background: ${({ bg }) => bg};
  color: ${({ fg }) => fg};
  font-size: ${font.size.xs};
  font-weight: ${font.weight.semibold};
  letter-spacing: 0.01em;
  white-space: nowrap;
`;
