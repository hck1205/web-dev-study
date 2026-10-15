import styled from "@emotion/styled";
import { anim, color, font, radius, space } from "@/common/design-system";
import { media } from "@/common/styles/breakpoints";
import { omitProps } from "@/common/styles/omit-props";

const noProps = omitProps("allPass", "fail");

export const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[2]};
  align-items: center;
  justify-content: space-between;
  padding: ${space[2]} ${space[3]};
  border-bottom: 1px solid ${color.border};
  background: ${color.bgSubtle};
`;

export const LangLabel = styled.span`
  color: ${color.textSubtle};
  font-family: ${font.mono};
  font-size: ${font.size.xs};
  letter-spacing: 0.04em;
`;

export const ToolbarEnd = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${space[1]};
  margin-left: auto;
`;

export const Shortcut = styled.kbd`
  display: none;
  font-family: ${font.mono};
  font-size: ${font.size.xs};
  opacity: 0.75;

  @media (hover: hover) and (pointer: fine) {
    display: inline;
  }
`;

/** 모바일은 16px (iOS가 입력 중 화면을 확대하지 않도록), tablet 이상은 조금 작게 */
export const EditorBox = styled.div`
  position: relative;
  max-height: 28rem;
  overflow: auto;
  background: ${color.codeBg};
  font-size: 16px;

  ${media.tablet} {
    font-size: ${font.size.sm};
  }

  .cm-editor {
    min-height: 8rem;
  }
`;

export const Fallback = styled.pre`
  margin: 0;
  padding: ${space[3]} ${space[4]};
  overflow-x: auto;
  color: ${color.text};
  font-family: ${font.mono};
  font-size: inherit;
  line-height: 1.6;
`;

export const Results = styled.div`
  padding: ${space[3]} ${space[4]} ${space[4]};
  border-top: 1px solid ${color.border};
  animation: ${anim.fadeUp} 320ms ${anim.easing.out} both;

  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

export const Summary = styled("div", noProps)<{ allPass: boolean }>`
  position: relative;
  display: flex;
  gap: ${space[2]};
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: ${space[2]};
  padding-bottom: ${space[2]};

  strong {
    color: ${({ allPass }) => (allPass ? color.success : color.danger)};
    font-weight: ${font.weight.bold};
    animation: ${anim.pop} 420ms ${anim.easing.spring} both;
  }
  span {
    color: ${color.textSubtle};
    font-family: ${font.mono};
    font-size: ${font.size.xs};
  }

  &::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 3px;
    border-radius: ${radius.full};
    background: ${color.border};
  }
`;

export const SummaryBar = styled("i", noProps)<{ allPass: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  border-radius: ${radius.full};
  background: ${({ allPass }) => (allPass ? color.success : color.warning)};
  transform-origin: left;
  transition: transform 700ms ${anim.easing.out};
`;

export const Row = styled.li`
  display: flex;
  gap: ${space[3]};
  padding: ${space[2]} 0;
  animation: ${anim.fadeUp} 320ms ${anim.easing.out} both;

  & + & {
    border-top: 1px dashed ${color.border};
  }
  & > div {
    min-width: 0;
  }
`;

export const RowLabel = styled.code`
  display: block;
  overflow-wrap: anywhere;
  color: ${color.text};
  font-family: ${font.mono};
  font-size: ${font.size.sm};
`;

export const RowDetail = styled("p", noProps)<{ fail?: boolean }>`
  margin: ${space[1]} 0 0;
  overflow-wrap: anywhere;
  color: ${({ fail }) => (fail ? color.danger : color.textMuted)};
  font-family: ${font.mono};
  font-size: ${font.size.xs};

  span {
    margin-left: ${space[2]};
    color: ${color.textSubtle};
  }
`;

export const ErrorBox = styled.p`
  margin: 0;
  padding: ${space[3]};
  border-radius: ${radius.md};
  background: ${color.dangerSoft};
  color: ${color.danger};
  font-family: ${font.mono};
  font-size: ${font.size.sm};
  overflow-wrap: anywhere;
  animation: ${anim.shake} 400ms ${anim.easing.out};
`;

export const Console = styled.div`
  margin-top: ${space[3]};
  padding: ${space[3]};
  border-radius: ${radius.md};
  background: ${color.codeBg};
  color: ${color.textMuted};
  font-family: ${font.mono};
  font-size: ${font.size.xs};
  white-space: pre-wrap;
  overflow-wrap: anywhere;

  &::before {
    content: "console";
    display: block;
    margin-bottom: ${space[1]};
    color: ${color.textSubtle};
    font-size: 0.6875rem;
    letter-spacing: 0.06em;
  }
`;
