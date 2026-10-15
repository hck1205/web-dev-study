"use client";

import { SITE } from "@/common/config/site";
import { Container } from "@/common/design-system";
import { InstallApp } from "../install-app";
import { Root, Row } from "./site-footer.styled";

export function SiteFooter() {
  return (
    <Root>
      <Container>
        <Row>
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          <InstallApp />
        </Row>
      </Container>
    </Root>
  );
}
