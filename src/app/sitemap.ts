import type { MetadataRoute } from "next";
import { siteUrl } from "@/common/config/site";
import { ALL_TAGS, POSTS, postHref, tagHref } from "@/features/posts";
import { QUIZ_TOPICS, quizHref } from "@/features/quiz/registry";
import { CHECKPOINTS, checkpointHref, COURSES, courseHref, FLAT_ROADMAPS, roadmapHref } from "@/features/roadmap/registry";
import { FLAT_TOPICS, topicLinkHref } from "@/features/topics/registry";
import { VOCABULARY, vocabHref } from "@/features/vocabulary/registry";

/** 정적으로 만들어지는 모든 경로를 검색 엔진에 알린다. 글은 날짜를 함께 준다. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const url = (path: string) => `${base}${path}`;
  const latest = POSTS.map((post) => post.date).sort().at(-1);

  const fixed = ["/", "/posts", "/topics", "/tags", "/roadmap", "/quiz", "/study", "/map", "/vocabulary", "/vocabulary/study"].map(
    (path) => ({ url: url(path), lastModified: latest }),
  );
  const posts = POSTS.map((post) => ({ url: url(postHref(post.slug)), lastModified: post.date }));
  // 어휘처럼 href가 따로 있는 토픽은 그 주소로 가므로 토픽 경로를 만들지 않는다
  const topics = FLAT_TOPICS.filter(({ topic }) => !topic.href).map(({ topic, path }) => ({ url: url(topicLinkHref(topic, path)) }));
  const tags = ALL_TAGS.map(({ tag }) => ({ url: url(tagHref(tag)) }));
  const roadmaps = [
    ...FLAT_ROADMAPS.map(({ path }) => ({ url: url(roadmapHref(path)) })),
    ...CHECKPOINTS.map(({ id }) => ({ url: url(checkpointHref(id)) })),
    ...COURSES.map(({ id }) => ({ url: url(courseHref(id)) })),
  ];
  const quizzes = QUIZ_TOPICS.map(({ path }) => ({ url: url(quizHref(path)) }));
  const words = VOCABULARY.map(({ word }) => ({ url: url(vocabHref(word)) }));

  return [...fixed, ...posts, ...topics, ...tags, ...roadmaps, ...quizzes, ...words];
}
