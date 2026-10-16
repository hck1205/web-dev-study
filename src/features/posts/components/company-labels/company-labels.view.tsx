"use client";

import { tagHref, tagSlug } from "../../registry";
import { Label } from "./company-labels.styled";
import type { CompanyLabelsProps } from "./company-labels.type";

/** 채용 공고에서 나온 글의 회사 라벨. 누르면 같은 회사 라벨이 붙은 글(#회사 태그)만 모아 본다. */
export function CompanyLabels({ companies }: CompanyLabelsProps) {
  if (!companies?.length) return null;

  return (
    <>
      {companies.map((company) => (
        <Label key={tagSlug(company)} href={tagHref(company)} aria-label={`${company} 라벨이 붙은 글 보기`}>
          {company}
        </Label>
      ))}
    </>
  );
}
