"use client";

import styled from "@emotion/styled";
import Link from "next/link";
import type { ReactNode } from "react";

const Header = styled.header`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgb(128 128 128 / 0.3);

  a {
    text-decoration: none;
  }
`;

const Brand = styled(Link)`
  font-weight: 700;
`;

const Main = styled.main`
  max-width: 760px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
`;

export function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header>
        <Brand href="/">web-dev-study</Brand>
        <Link href="/algorithms/two-sum">Algorithms</Link>
        <Link href="/labs/stack">Labs</Link>
      </Header>
      <Main>{children}</Main>
    </>
  );
}
