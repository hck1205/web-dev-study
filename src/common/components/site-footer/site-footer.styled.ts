import styled from "@emotion/styled";
import Link from "next/link";
import { color, font, space } from "@/common/design-system";

export const Root = styled.footer`
  margin-top: ${space[16]};
  padding: ${space[8]} 0 ${space[12]};
  border-top: 1px solid ${color.border};
  color: ${color.textSubtle};
  font-size: ${font.size.sm};
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]} ${space[6]};
  align-items: center;
  justify-content: space-between;
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]} ${space[4]};
  align-items: center;
`;

export const FooterLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  min-height: 2.75rem;
  color: ${color.textSubtle};
  text-decoration: none;

  &:hover {
    color: ${color.accent};
  }
`;
