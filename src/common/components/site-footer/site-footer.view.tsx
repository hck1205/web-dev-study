"use client";

import { Container } from "@/common/design-system";
import { Root, Row } from "./site-footer.styled";

export function SiteFooter() {
  return (
    <Root>
      <Container>
        <Row>
          <span>© {new Date().getFullYear()} web-dev-study</span>
          <span>Web · Network · Infra · Algorithms · CS</span>
        </Row>
      </Container>
    </Root>
  );
}
