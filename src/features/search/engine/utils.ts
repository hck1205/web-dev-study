import type { Post } from "@/features/posts";
import { findTopicByKey } from "@/features/topics/registry";
import type { SearchResult } from "./types";

const normalize = (text: string) => text.toLowerCase().normalize("NFC");

/** "#Hash Table" → "hashtable" 처럼 해시 기호와 공백을 무시해 태그를 비교한다. */
const squash = (text: string) => normalize(text).replace(/[#\s]/g, "");

function topicLabels(post: Post): string[] {
  return findTopicByKey(post.topic)?.trail.map((topic) => topic.label) ?? [];
}

/**
 * 검색어를 공백으로 나눠 모든 단어(AND)가 제목·태그·토픽·요약 중 어딘가에 포함된 글만 찾는다.
 * 제목 > 태그 > 토픽 > 요약 순으로 가중치를 준다. 한글은 부분 문자열로 매칭한다.
 */
export function searchPosts(query: string, posts: Post[]): SearchResult[] {
  const tokens = normalize(query).split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return [];

  const results: SearchResult[] = [];

  for (const post of posts) {
    const labels = topicLabels(post);
    const title = normalize(post.title);
    const summary = normalize(post.summary);
    const tags = post.tags.map(squash);
    const topics = labels.map(normalize);

    let score = 0;
    const matchedAll = tokens.every((token) => {
      const squashed = squash(token);
      let hit = 0;
      if (title.includes(token)) hit += 4;
      if (squashed && tags.some((tag) => tag.includes(squashed))) hit += 3;
      if (topics.some((topic) => topic.includes(token))) hit += 2;
      if (summary.includes(token)) hit += 1;
      score += hit;
      return hit > 0;
    });

    if (matchedAll) results.push({ post, score, topicPath: labels.join(" / ") });
  }

  return results.sort((a, b) => b.score - a.score || b.post.date.localeCompare(a.post.date));
}
