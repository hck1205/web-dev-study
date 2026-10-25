import styled from "@emotion/styled";
import { color, font, space } from "@/common/design-system";

export const IntroMeta = styled.p`
  margin: 0;
  color: ${color.textMuted};
  line-height: ${font.leading.normal};
`;

export const Sources = styled.div`
  width: 100%;
  padding-top: ${space[5]};
  border-top: 1px solid ${color.border};

  p {
    margin: 0 0 ${space[2]};
    color: ${color.textSubtle};
    font-size: ${font.size.sm};
  }
  ul {
    margin: 0;
    padding-left: ${space[5]};
  }
  li + li {
    margin-top: ${space[1]};
  }
  a {
    color: ${color.text};
  }
  a:hover {
    color: ${color.accent};
  }
`;

/** 글 목록은 접어 두고 제목 줄만 보인다. 토픽이 크면 글이 수백 편이라 펼쳐 두면 시작 버튼이 화면 밖으로 밀린다 */
export const SourcesToggle = styled.details`
  summary {
    display: inline-flex;
    align-items: center;
    min-height: 2.75rem;
    cursor: pointer;
    list-style: none;
  }
  summary::-webkit-details-marker {
    display: none;
  }
  summary::before {
    content: "▸";
    margin-right: 0.375rem;
  }
  &[open] summary::before {
    content: "▾";
  }
`;
