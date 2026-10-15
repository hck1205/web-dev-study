"use client";

import Link from "next/link";
import type { CrumbLinksProps } from "./crumb-links.type";

/** "A / B / C" 형태의 경로 링크. 감싸는 nav와 스타일은 쓰는 쪽이 정한다. */
export function CrumbLinks({ items }: CrumbLinksProps) {
  return (
    <>
      {items.map((item, index) => (
        <span key={`${item.href ?? ""}-${item.label}`}>
          {index > 0 && " / "}
          {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
        </span>
      ))}
    </>
  );
}
