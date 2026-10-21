import styled from "@emotion/styled";
import { anim, color, font, radius, space } from "@/common/design-system";

/** 스크롤되는 화면. 안쪽 내용은 이 틀 밖으로 나가면 잘린다 */
export const Viewport = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  border-radius: ${radius.sm};
`;

/** 스크롤 위치만큼 통째로 움직이는 층. 30fps로 바뀌는 값을 짧은 transition이 메운다 */
export const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  will-change: transform;
`;

/** 층 안에서 y(rem)에 놓는 줄 */
export const At = styled.div`
  position: absolute;
  left: 0;
  right: 0;
`;

export const Label = styled.span`
  color: ${color.textMuted};
  font-family: ${font.mono};
  font-size: 0.65rem;
  line-height: 1;
`;

/* ---------- sticky ---------- */

export const StickyHead = styled.div<{ stuck: boolean }>`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${space[2]};
  border-bottom: 1px solid ${({ stuck }) => (stuck ? color.accent : color.border)};
  background: ${({ stuck }) => (stuck ? color.accentSoft : color.surface)};
  color: ${({ stuck }) => (stuck ? color.accent : color.textMuted)};
  font-size: ${font.size.xs};
  font-weight: ${font.weight.semibold};
  transition:
    background 200ms ${anim.easing.out},
    border-color 200ms ${anim.easing.out},
    color 200ms ${anim.easing.out};
`;

/* ---------- scroll snap ---------- */

export const SnapTrack = styled.div`
  display: flex;
  width: 100%;
  height: 72%;
  will-change: transform;
`;

export const SnapCard = styled.div<{ active: boolean }>`
  flex: none;
  display: grid;
  align-content: end;
  gap: 0.3rem;
  padding: ${space[2]};
  border-radius: ${radius.md};
  outline: 2px solid ${({ active }) => (active ? color.accent : "transparent")};
  outline-offset: -2px;
  opacity: ${({ active }) => (active ? 1 : 0.55)};
  transition:
    opacity 300ms ${anim.easing.out},
    outline-color 300ms ${anim.easing.out};
`;

/** snap-align: center가 맞추는 기준선 */
export const SnapGuide = styled.div`
  position: absolute;
  top: -0.3rem;
  bottom: 22%;
  left: 50%;
  border-left: 1px dashed ${color.accent};
  opacity: 0.6;
`;

export const Dots = styled.div`
  position: absolute;
  right: 0;
  bottom: 0.2rem;
  left: 0;
  display: flex;
  justify-content: center;
  gap: 0.3rem;
`;

export const Dot = styled.span<{ active: boolean }>`
  width: ${({ active }) => (active ? "0.9rem" : "0.35rem")};
  height: 0.35rem;
  border-radius: ${radius.full};
  background: ${({ active }) => (active ? color.accent : color.borderStrong)};
  transition:
    width 300ms ${anim.easing.out},
    background 300ms ${anim.easing.out};
`;

/* ---------- scroll reveal ---------- */

export const RevealCard = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  display: grid;
  align-content: center;
  gap: 0.35rem;
  padding: 0 ${space[2]};
  border: 1px solid ${color.border};
  border-radius: ${radius.sm};
  background: ${color.surface};
`;

export const Threshold = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  z-index: 1;
  border-top: 1px dashed ${color.accent};

  span {
    position: absolute;
    right: 0;
    top: -0.85rem;
    padding: 0 0.2rem;
    background: ${color.bg};
    color: ${color.accent};
    font-family: ${font.mono};
    font-size: 0.6rem;
  }
`;

/* ---------- scroll progress ---------- */

export const ProgressTrack = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  height: 0.3rem;
  background: ${color.border};
`;

export const ProgressFill = styled.div`
  height: 100%;
  border-radius: 0 ${radius.full} ${radius.full} 0;
  background: ${color.accent};
`;

export const ProgressBadge = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 0;
  z-index: 1;
  padding: 0.1rem 0.3rem;
  border-radius: ${radius.sm};
  background: ${color.accentSoft};
  color: ${color.accent};
  font-family: ${font.mono};
  font-size: 0.65rem;
  font-variant-numeric: tabular-nums;
`;

/* ---------- zoom on scroll ---------- */

export const ZoomImage = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  display: grid;
  place-items: center;
  border-radius: ${radius.md};
  background: linear-gradient(135deg, ${color.series1}, ${color.series3});
  transform-origin: center;

  span {
    padding: 0.1rem 0.35rem;
    border-radius: ${radius.sm};
    background: ${color.surface};
    color: ${color.text};
    font-family: ${font.mono};
    font-size: 0.65rem;
    font-variant-numeric: tabular-nums;
  }
`;

/* ---------- parallax ---------- */

/** 촘촘한 점 무늬. 배경 층이 얼마나 움직였는지 눈으로 재는 자 역할을 한다 */
export const DotField = styled.div`
  height: 20rem;
  background: radial-gradient(circle, ${color.borderStrong} 0.07rem, transparent 0.08rem) 0 0 / 0.8rem 0.8rem;
`;

export const Blob = styled.span`
  position: absolute;
  border-radius: ${radius.full};
  opacity: 0.35;
`;

export const FrontCard = styled.div`
  position: absolute;
  left: 12%;
  right: 12%;
  display: grid;
  gap: 0.35rem;
  padding: ${space[2]};
  border: 1px solid ${color.border};
  border-radius: ${radius.sm};
  background: ${color.surface};
`;

export const SpeedTag = styled.span`
  position: absolute;
  z-index: 1;
  padding: 0.05rem 0.3rem;
  border-radius: ${radius.sm};
  background: ${color.bg};
  color: ${color.textMuted};
  font-family: ${font.mono};
  font-size: 0.6rem;
`;

/* ---------- horizontal scroll ---------- */

export const HSection = styled.div<{ pinned: boolean }>`
  position: absolute;
  left: 0;
  right: 0;
  overflow: hidden;
  padding: 0.35rem 0;
  border: 1px solid ${({ pinned }) => (pinned ? color.accent : color.border)};
  border-radius: ${radius.sm};
  background: ${({ pinned }) => (pinned ? color.accentSoft : color.bgSubtle)};
  transition:
    border-color 200ms ${anim.easing.out},
    background 200ms ${anim.easing.out};
`;

export const HTrack = styled.div`
  display: flex;
  width: 100%;
  height: 2.9rem;
  margin-top: 0.3rem;
  will-change: transform;
`;

export const HCard = styled.div`
  flex: none;
  display: grid;
  place-items: center;
  border-radius: ${radius.sm};
  color: ${color.onAccent};
  font-family: ${font.mono};
  font-size: ${font.size.xs};
  font-weight: ${font.weight.bold};
`;

/** 오른쪽 가장자리의 세로 스크롤 막대. 세로로 움직인 양을 보여 준다 */
export const VScroll = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  width: 0.2rem;
  border-radius: ${radius.full};
  background: ${color.border};
`;

export const VThumb = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 25%;
  border-radius: ${radius.full};
  background: ${color.textSubtle};
`;

/* ---------- scrollytelling ---------- */

export const StoryGraphic = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 0.7rem;
  padding: 0.3rem 0;
  border-bottom: 1px solid ${color.border};
  background: ${color.bg};
`;

export const StoryBar = styled.div`
  width: 1.4rem;
  height: 100%;
  border-radius: ${radius.sm} ${radius.sm} 0 0;
  transform-origin: bottom;
  transition:
    transform 500ms ${anim.easing.out},
    background 300ms ${anim.easing.out},
    filter 300ms ${anim.easing.out};
`;

export const StorySteps = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

export const StoryStep = styled.div<{ active: boolean }>`
  position: absolute;
  left: 10%;
  right: 10%;
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0 ${space[2]};
  border: 1px solid ${({ active }) => (active ? color.accent : color.border)};
  border-radius: ${radius.sm};
  background: ${({ active }) => (active ? color.accentSoft : color.surface)};
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  transition:
    opacity 300ms ${anim.easing.out},
    background 300ms ${anim.easing.out},
    border-color 300ms ${anim.easing.out};
`;

export const StepNo = styled.span<{ active: boolean }>`
  display: grid;
  place-items: center;
  width: 1.1rem;
  height: 1.1rem;
  flex: none;
  border-radius: ${radius.full};
  background: ${({ active }) => (active ? color.accent : color.border)};
  color: ${({ active }) => (active ? color.onAccent : color.textMuted)};
  font-size: 0.65rem;
  font-weight: ${font.weight.bold};
`;

export const TriggerLine = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  z-index: 1;
  border-top: 1px dashed ${color.accent};
  opacity: 0.7;
`;
