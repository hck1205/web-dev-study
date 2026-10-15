"use client";

import { Scroller } from "./mdx-table.styled";
import type { MdxTableProps } from "./mdx-table.type";

export function MdxTable(props: MdxTableProps) {
  return (
    <Scroller>
      <table {...props} />
    </Scroller>
  );
}
