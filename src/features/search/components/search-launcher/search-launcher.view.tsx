"use client";

import { CloseIcon, IconButton, SearchIcon, Tag } from "@/common/design-system";
import { postHref, tagLabel } from "@/features/posts";
import { useSearchLauncher } from "./search-launcher";
import {
  Backdrop,
  Body,
  Empty,
  Hint,
  Input,
  InputRow,
  Panel,
  ResultLink,
  ResultList,
  ResultMeta,
  ResultTitle,
  Tags,
} from "./search-launcher.styled";

/** 헤더의 검색 버튼 + 검색 모달. 정적 사이트이므로 브라우저에서 글 메타데이터(제목·태그·토픽·요약)를 검색한다. */
export function SearchLauncher() {
  const s = useSearchLauncher();

  return (
    <>
      <IconButton label="검색 (/)" onClick={s.openSearch}>
        <SearchIcon />
      </IconButton>

      {s.open && (
        <Backdrop onMouseDown={(event) => event.target === event.currentTarget && s.close()}>
          <Panel role="dialog" aria-modal="true" aria-label="글 검색">
            <InputRow>
              <SearchIcon size={20} />
              <Input
                ref={s.inputRef}
                value={s.query}
                onChange={(event) => s.onChange(event.target.value)}
                onKeyDown={s.onKeyDown}
                placeholder="제목, 태그, 토픽으로 검색"
                aria-label="검색어"
                enterKeyHint="search"
                autoComplete="off"
                spellCheck={false}
              />
              <IconButton label="검색 닫기" onClick={s.close}>
                <CloseIcon />
              </IconButton>
            </InputRow>

            <Body>
              {s.query.trim() === "" ? (
                <>
                  <Hint>태그로 바로 찾아보세요.</Hint>
                  <Tags>
                    {s.suggestedTags.map((tag) => (
                      <Tag key={tag.slug} href={tag.href} onClick={s.selectResult}>
                        {tag.label}
                      </Tag>
                    ))}
                  </Tags>
                </>
              ) : s.results.length === 0 ? (
                <Empty>&ldquo;{s.query}&rdquo;에 대한 글이 없습니다.</Empty>
              ) : (
                <ResultList role="listbox" aria-label="검색 결과">
                  {s.results.map(({ post, topicPath }, index) => (
                    <li key={post.slug} role="option" aria-selected={index === s.activeIndex}>
                      <ResultLink
                        href={postHref(post.slug)}
                        active={index === s.activeIndex}
                        onMouseEnter={() => s.setActiveIndex(index)}
                        onClick={s.selectResult}
                      >
                        <ResultTitle>{post.title}</ResultTitle>
                        <ResultMeta>
                          {topicPath} · {post.tags.map((tag) => `#${tagLabel(tag)}`).join(" ")}
                        </ResultMeta>
                      </ResultLink>
                    </li>
                  ))}
                </ResultList>
              )}
            </Body>
          </Panel>
        </Backdrop>
      )}
    </>
  );
}
