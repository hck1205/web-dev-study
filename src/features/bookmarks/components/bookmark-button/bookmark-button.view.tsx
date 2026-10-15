"use client";

import { StarIcon } from "@/common/design-system";
import { useBookmarkButton } from "./bookmark-button";
import { Root } from "./bookmark-button.styled";
import type { BookmarkButtonProps } from "./bookmark-button.type";

/** 별 모양 즐겨찾기 토글. 상태는 이 브라우저(localStorage)에만 저장된다. */
export function BookmarkButton({ slug, withLabel }: BookmarkButtonProps) {
  const { active, label, toggle } = useBookmarkButton(slug);

  return (
    <Root
      type="button"
      active={active}
      aria-pressed={active}
      aria-label={label}
      title={label}
      onClick={toggle}
    >
      <StarIcon size={withLabel ? 18 : 20} filled={active} />
      {withLabel && <span aria-hidden="true">즐겨찾기</span>}
    </Root>
  );
}
