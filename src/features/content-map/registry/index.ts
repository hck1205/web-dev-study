import { POST_RELATIONS } from "./relations.generated";
import type { PostRelations } from "./types";

export type { PostRelations } from "./types";

const EMPTY: PostRelations = { links: [], mentions: [] };

export const relationsOf = (slug: string): PostRelations => POST_RELATIONS[slug] ?? EMPTY;

/** 이 글을 링크하거나 키워드로 가리키는 글 */
export const incomingOf = (slug: string) =>
  Object.entries(POST_RELATIONS)
    .filter(([, rel]) => rel.links.includes(slug) || rel.mentions.includes(slug))
    .map(([from]) => from);
