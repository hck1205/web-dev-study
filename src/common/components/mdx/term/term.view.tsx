"use client";

import { useTerm } from "./term";
import { Root, Tip, Word } from "./term.styled";
import type { TermProps } from "./term.type";

/**
 * 본문 용어 위의 한 줄 풀이. 빌드 시 remark-glossary가 처음 나오는 용어를 이 컴포넌트로 감싼다.
 * 쉬운 모드가 꺼져 있으면 그냥 글자로 보인다.
 */
export function Term({ plain, children }: TermProps) {
  const { easy, open, toggle, rootRef, tipId } = useTerm();
  if (!easy) return <>{children}</>;

  return (
    <Root ref={rootRef}>
      <Word type="button" aria-expanded={open} aria-describedby={open ? tipId : undefined} onClick={toggle}>
        {children}
      </Word>
      {open && (
        <Tip id={tipId} role="tooltip">
          {plain}
        </Tip>
      )}
    </Root>
  );
}
