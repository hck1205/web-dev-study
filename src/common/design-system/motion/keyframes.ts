import { keyframes } from "@emotion/react";

/** 선이 그려지듯 나타난다. 대상 path에 pathLength="1" 이 있어야 한다. */
export const draw = keyframes`
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: 0; }
`;

/** 아래에서 살짝 올라오며 나타난다 (설명 패널, 캡션) */
export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
`;

/** 톡 튀어나온다 (현재 칸, 새로 생긴 점) */
export const pop = keyframes`
  0% { transform: scale(0.6); opacity: 0; }
  60% { transform: scale(1.12); opacity: 1; }
  100% { transform: scale(1); }
`;

/** 위에서 떨어지며 쌓인다 (push) */
export const dropIn = keyframes`
  from { opacity: 0; transform: translateY(-14px) scale(0.9); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

/** 위로 빠지며 사라진다 (pop) */
export const liftOut = keyframes`
  0% { opacity: 1; transform: translateY(0); max-width: 6rem; }
  70% { opacity: 0; transform: translateY(-16px); max-width: 6rem; }
  100% { opacity: 0; transform: translateY(-16px); max-width: 0; padding-left: 0; padding-right: 0; margin-left: -0.5rem; }
`;

/** 바깥으로 퍼지며 사라지는 고리 (주목 효과) */
export const ripple = keyframes`
  from { transform: scale(1); opacity: 0.6; }
  to { transform: scale(2.6); opacity: 0; }
`;

/** 아래로 통통 튄다 (포인터) */
export const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  40% { transform: translateY(-6px); }
`;

/** 선 위를 따라 움직인다. --dx, --dy CSS 변수로 이동 거리를 정한다. */
export const travel = keyframes`
  from { transform: translate(0, 0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  to { transform: translate(var(--dx), var(--dy)); opacity: 0; }
`;

/** 은은하게 빛났다 사라진다 (성공 강조) */
export const glow = keyframes`
  0% { box-shadow: 0 0 0 0 currentColor; }
  100% { box-shadow: 0 0 0 10px transparent; }
`;

/** 좌우로 짧게 흔들린다 (오답) */
export const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  20% { transform: translateX(-6px); }
  40% { transform: translateX(5px); }
  60% { transform: translateX(-3px); }
  80% { transform: translateX(2px); }
`;

/** 오른쪽에서 미끄러져 들어온다 (다음 카드) */
export const slideIn = keyframes`
  from { opacity: 0; transform: translateX(24px); }
  to { opacity: 1; transform: translateX(0); }
`;

/** 선이 --to 비율까지만 채워진다 (진행률 고리). 대상 path에 pathLength="1" 이 있어야 한다. */
export const fillTo = keyframes`
  from { stroke-dashoffset: 1; }
  to { stroke-dashoffset: var(--to); }
`;
