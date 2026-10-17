import { getPostBySlug, postHref } from "@/features/posts";
import { incomingOf, relationsOf } from "../../registry";
import type { MapPost } from "./content-map.type";

/** 한 글 아래에 보여 줄 관련 글 수. 더 많으면 글 지도 문서(docs/content-index.md)에서 본다. */
export const RELATED_LIMIT = 4;

export function relatedPosts(slug: string): MapPost["related"] {
  const { links, mentions } = relationsOf(slug);
  const ordered = [...new Set([...links, ...mentions, ...incomingOf(slug)])].filter((other) => other !== slug);
  return ordered.flatMap((other) => {
    const post = getPostBySlug(other);
    return post ? [{ slug: other, title: post.title, href: postHref(other) }] : [];
  }).slice(0, RELATED_LIMIT);
}
