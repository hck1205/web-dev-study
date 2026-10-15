import styled from "@emotion/styled";
import Link from "next/link";

export const Header = styled.header`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgb(128 128 128 / 0.3);

  a {
    text-decoration: none;
  }
`;

export const Brand = styled(Link)`
  font-weight: 700;
`;

export const Main = styled.main`
  max-width: 760px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
`;
