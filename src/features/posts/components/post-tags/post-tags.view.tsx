"use client";

import { Tag } from "@/common/design-system";
import { tagHref, tagLabel, tagSlug } from "../../registry";
import type { PostTagsProps } from "./post-tags.type";

/** 글의 해시태그 목록. 각 태그는 /tags/{slug} 로 이동한다. */
export function PostTags({ tags }: PostTagsProps) {
  return (
    <>
      {tags.map((tag) => (
        <Tag key={tagSlug(tag)} href={tagHref(tag)}>
          {tagLabel(tag)}
        </Tag>
      ))}
    </>
  );
}
