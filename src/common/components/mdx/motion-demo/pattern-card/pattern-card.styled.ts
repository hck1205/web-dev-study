import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import { anim, color, font, radius, space } from "@/common/design-system";

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

/** 화면 안쪽 전체를 차지하는 무대. 절대 위치로 놓는 장면의 기준 */
export const Stage = styled.div`
  position: relative;
  height: 100%;
`;

export const Center = styled.div`
  display: grid;
  height: 100%;
  place-items: center;
  align-content: center;
  gap: ${space[2]};
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

export const Bar = styled.div<{ w?: string; h?: string; tone?: "muted" | "soft" }>`
  width: ${({ w }) => w ?? "100%"};
  height: ${({ h }) => h ?? "0.45rem"};
  flex: none;
  border-radius: ${radius.full};
  background: ${({ tone }) => (tone === "soft" ? color.accentSoft : color.border)};
`;

export const Avatar = styled.span<{ tone?: string }>`
  width: 0.95rem;
  height: 0.95rem;
  flex: none;
  border-radius: ${radius.full};
  background: ${({ tone }) => tone ?? color.series1};
`;

export const Mono = styled.span`
  color: ${color.textMuted};
  font-family: ${font.mono};
  font-size: ${font.size.xs};
`;

/* ---------- slide in ---------- */

export const Dim = styled.div`
  position: absolute;
  inset: 0;
  background: ${color.text};
`;

export const Sheet = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  gap: 0.4rem;
  padding: ${space[2]} ${space[3]} ${space[3]};
  border-top: 1px solid ${color.border};
  border-radius: ${radius.md} ${radius.md} 0 0;
  background: ${color.surface};
`;

/* ---------- spring pop ---------- */

export const AppIcon = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: ${radius.lg};
  background: linear-gradient(135deg, ${color.series1}, ${color.accent});
`;

export const Badge = styled.span`
  position: absolute;
  top: -0.45rem;
  right: -0.45rem;
  display: grid;
  place-items: center;
  min-width: 1.35rem;
  height: 1.35rem;
  padding: 0 0.25rem;
  border: 2px solid ${color.bg};
  border-radius: ${radius.full};
  background: ${color.danger};
  color: ${color.onAccent};
  font-size: 0.7rem;
  font-weight: ${font.weight.bold};
`;

export const BadgeNumber = styled.span`
  display: inline-block;
  animation: ${anim.pop} 400ms ${anim.easing.spring} both;
`;

/* ---------- shared element ---------- */

export const SharedElementTile = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: ${radius.sm};
  background: linear-gradient(135deg, ${color.series1}, ${color.series3});
`;

export const OtherTile = styled.div`
  position: absolute;
  top: 0;
  width: 30%;
  height: 2.6rem;
  border-radius: ${radius.sm};
`;

/* ---------- ripple ---------- */

export const TapButton = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  width: 85%;
  height: 2.75rem;
  overflow: hidden;
  border-radius: ${radius.md};
  background: ${color.accent};
  color: ${color.onAccent};
  font-size: ${font.size.xs};
  font-weight: ${font.weight.semibold};
`;

const rippleGrow = keyframes`
  from { transform: translate(-50%, -50%) scale(0); opacity: 0.45; }
  to { transform: translate(-50%, -50%) scale(1); opacity: 0; }
`;

/** 누른 자리에서 버튼 전체를 덮을 만큼 커지며 사라지는 원 */
export const RippleCircle = styled.span<{ still?: boolean }>`
  position: absolute;
  width: 14rem;
  height: 14rem;
  border-radius: ${radius.full};
  background: ${color.onAccent};
  pointer-events: none;
  transform: translate(-50%, -50%) scale(${({ still }) => (still ? 0.45 : 1)});
  opacity: ${({ still }) => (still ? 0.25 : 0)};
  ${({ still }) =>
    still
      ? css`
          animation: none;
        `
      : css`
          animation: ${rippleGrow} 600ms ${anim.easing.out} both;
        `}
`;

/** 손가락이 닿는 자리 */
export const Finger = styled.span`
  position: absolute;
  width: 1.1rem;
  height: 1.1rem;
  border: 2px solid ${color.textSubtle};
  border-radius: ${radius.full};
  transform: translate(-50%, -50%);
  transition:
    opacity 200ms ${anim.easing.out},
    transform 200ms ${anim.easing.out};
`;

/* ---------- path draw ---------- */

export const DrawPath = styled.path`
  stroke-dasharray: 1;
  stroke-dashoffset: 0;
  animation: ${anim.draw} 900ms ${anim.easing.inOut} both;
`;

export const EndDot = styled.circle`
  transform-box: fill-box;
  transform-origin: center;
  animation: ${anim.pop} 400ms ${anim.easing.spring} 850ms both;
`;

/* ---------- marquee ---------- */

const marqueeMove = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

export const MarqueeWindow = styled.div`
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, black 15%, black 85%, transparent);
`;

/** 같은 목록을 두 번 이어 붙이고 절반만큼 옮긴 뒤 처음으로 돌아가면 이음매가 보이지 않는다 */
export const MarqueeTrack = styled.div<{ running: boolean; reverse?: boolean; seconds: number }>`
  display: flex;
  width: max-content;
  animation: ${marqueeMove} ${({ seconds }) => seconds}s linear infinite;
  animation-direction: ${({ reverse }) => (reverse ? "reverse" : "normal")};
  animation-play-state: ${({ running }) => (running ? "running" : "paused")};
`;

export const Chip = styled.span`
  flex: none;
  margin-right: 0.4rem;
  padding: 0.2rem 0.55rem;
  border: 1px solid ${color.border};
  border-radius: ${radius.full};
  background: ${color.surface};
  color: ${color.textMuted};
  font-family: ${font.mono};
  font-size: 0.7rem;
`;

/* ---------- tilt ---------- */

export const TiltStage = styled.div`
  display: grid;
  height: 100%;
  place-items: center;
  position: relative;
  perspective: 600px;
`;

export const TiltCard = styled.div`
  position: relative;
  display: grid;
  gap: 0.35rem;
  width: 78%;
  padding: ${space[2]};
  overflow: hidden;
  border: 1px solid ${color.border};
  border-radius: ${radius.md};
  background: ${color.surface};
  box-shadow: 0 8px 18px -10px ${color.borderStrong};
  transform-style: preserve-3d;
`;

export const Photo = styled.div`
  height: 2.6rem;
  border-radius: ${radius.sm};
  background: linear-gradient(135deg, ${color.series2}, ${color.series1});
`;

export const Glare = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
`;

export const Cursor = styled.span`
  position: absolute;
  width: 0.6rem;
  height: 0.6rem;
  border: 2px solid ${color.text};
  border-radius: ${radius.full};
  background: ${color.surface};
  transform: translate(-50%, -50%);
  pointer-events: none;
`;
