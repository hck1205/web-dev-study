import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { color, font, radius, space } from "@/common/design-system";

export const Card = styled.div`
  display: grid;
  gap: ${space[2]};
  min-width: 0;
`;

export const Head = styled.div`
  display: grid;
  gap: 2px;
  text-align: center;

  strong {
    color: ${color.text};
    font-size: ${font.size.sm};
  }
  span {
    color: ${color.textSubtle};
    font-size: ${font.size.xs};
    word-break: keep-all;
  }
`;

/** 작은 앱 화면 틀 */
export const Screen = styled.div<{ large?: boolean }>`
  position: relative;
  height: ${({ large }) => (large ? "13rem" : "9.5rem")};
  overflow: hidden;
  padding: 1.5rem ${space[3]} ${space[3]};
  border: 1px solid ${color.border};
  border-radius: ${radius.md};
  background: ${color.bg};

  &::before {
    content: "";
    position: absolute;
    top: 0.55rem;
    left: 0.6rem;
    width: 1.6rem;
    height: 0.3rem;
    border-radius: ${radius.full};
    background: radial-gradient(circle, ${color.borderStrong} 0.15rem, transparent 0.16rem) 0 0 / 0.55rem 0.3rem repeat-x;
  }
`;

export const Center = styled.div`
  display: grid;
  height: 100%;
  place-items: center;
  align-content: center;
  gap: ${space[2]};
`;

export const Bar = styled.div<{ w?: string; h?: string }>`
  width: ${({ w }) => w ?? "100%"};
  height: ${({ h }) => h ?? "0.45rem"};
  border-radius: ${radius.full};
  background: ${color.border};
`;

const shimmerMove = keyframes`
  from { background-position: 150% 0; }
  to { background-position: -50% 0; }
`;

/** 빛이 왼쪽으로 훑고 지나가는 회색 덩어리 */
export const Shimmer = styled.div<{ w?: string; h?: string; round?: boolean }>`
  width: ${({ w }) => w ?? "100%"};
  height: ${({ h }) => h ?? "0.5rem"};
  border-radius: ${({ round }) => (round ? radius.full : radius.sm)};
  background: linear-gradient(90deg, ${color.border} 30%, ${color.surfaceHover} 50%, ${color.border} 70%) 0 0 / 200% 100%;
  animation: ${shimmerMove} 1.2s linear infinite;
`;

export const Stack = styled.div<{ gap?: string }>`
  display: grid;
  gap: ${({ gap }) => gap ?? "0.4rem"};
`;

export const Row = styled.div`
  display: flex;
  gap: 0.45rem;
  align-items: center;
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Spinner = styled.span<{ size?: string; onAccent?: boolean }>`
  display: inline-block;
  width: ${({ size }) => size ?? "1.75rem"};
  height: ${({ size }) => size ?? "1.75rem"};
  border: 3px solid ${({ onAccent }) => (onAccent ? "rgba(255,255,255,0.35)" : color.border)};
  border-top-color: ${({ onAccent }) => (onAccent ? color.onAccent : color.accent)};
  border-radius: ${radius.full};
  animation: ${spin} 800ms linear infinite;
`;

export const Mono = styled.span`
  color: ${color.textMuted};
  font-family: ${font.mono};
  font-size: ${font.size.xs};
`;

export const Fill = styled.div`
  height: 100%;
  border-radius: inherit;
  background: ${color.accent};
`;

export const Track = styled.div`
  width: 100%;
  height: 0.45rem;
  overflow: hidden;
  border-radius: ${radius.full};
  background: ${color.border};
`;

export const Tile = styled.div`
  border-radius: ${radius.sm};
  transition:
    opacity 400ms ease,
    transform 400ms ease;
`;

export const Dot = styled.span<{ state: "done" | "active" | "todo" }>`
  display: inline-grid;
  place-items: center;
  width: 1.4rem;
  height: 1.4rem;
  border: 2px solid ${({ state }) => (state === "todo" ? color.border : color.accent)};
  border-radius: ${radius.full};
  background: ${({ state }) => (state === "done" ? color.accent : color.surface)};
  color: ${({ state }) => (state === "done" ? color.onAccent : state === "active" ? color.accent : color.textSubtle)};
  font-size: 0.65rem;
  font-weight: ${font.weight.bold};
  transition: all 300ms ease;
`;

export const Caret = styled.span`
  display: inline-block;
  width: 0.4rem;
  height: 0.85em;
  margin-left: 1px;
  background: ${color.accent};
  vertical-align: -0.1em;
`;

export const Small = styled.p`
  margin: 0;
  color: ${color.text};
  font-size: ${font.size.xs};
  line-height: 1.55;
  word-break: keep-all;
`;

export const Pill = styled.span<{ tone: "accent" | "success" | "muted" }>`
  display: inline-flex;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
  min-width: 5.5rem;
  height: 2rem;
  padding: 0 ${space[3]};
  border-radius: ${radius.md};
  background: ${({ tone }) => (tone === "success" ? color.success : tone === "muted" ? color.border : color.accent)};
  color: ${color.onAccent};
  font-size: ${font.size.xs};
  font-weight: ${font.weight.semibold};
  transition: background 250ms ease;
`;

export const Heart = styled.span<{ on: boolean }>`
  color: ${({ on }) => (on ? color.danger : color.textSubtle)};
  font-size: ${font.size.sm};
  transition: transform 200ms ease;
  transform: scale(${({ on }) => (on ? 1.2 : 1)});
`;
