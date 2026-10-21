"use client";

import { useId, type ReactNode } from "react";
import { anim, color } from "@/common/design-system";
import type { MotionPattern } from "../motion-demo.type";
import { MARQUEE_ITEMS, RIPPLE_TAPS, STAGGER_GAP_MS, STAGGER_ROWS, during, swing } from "../motion-demo.utils";
import { useFlip } from "./hooks/use-flip";
import { angleFromPointer, useTilt } from "./hooks/use-tilt";
import { usePatternCard } from "./pattern-card";
import { SCROLL_SCENES } from "./scroll-scenes";
import {
  AppIcon,
  Avatar,
  Badge,
  BadgeNumber,
  Bar,
  Card,
  Center,
  Chip,
  Cursor,
  Dim,
  DrawPath,
  EndDot,
  Finger,
  Glare,
  Head,
  MarqueeTrack,
  MarqueeWindow,
  Mono,
  OtherTile,
  Photo,
  RippleCircle,
  Row,
  Screen,
  SharedElementTile,
  Sheet,
  Stack,
  Stage,
  TapButton,
  TiltCard,
  TiltStage,
} from "./pattern-card.styled";
import type { PatternCardProps, SceneProps } from "./pattern-card.type";

const { easing } = anim;
const SERIES = [color.series1, color.series2, color.series3];

/** 들어올 때와 나갈 때 다른 이징을 쓰는 transition 문자열 */
const enterExit = (on: boolean, prop: string, enter: string, exit = `250ms ${easing.inOut}`) =>
  on ? `${prop} ${enter}` : `${prop} ${exit}`;

function GooeyScene({ t, still, period }: SceneProps) {
  // 필터 id는 카드마다 달라야 한다. useId의 특수 문자는 url(#...)에서 문제가 될 수 있어 지운다
  const filterId = `goo${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const a = still ? 0 : swing(t, period);
  // 작은 덩어리 둘이 가운데 덩어리에 붙었다(거리 < 25) 떨어졌다(거리 > 35) 한다
  const left = 70 - (30 + 16 * a);
  const right = 70 + (30 - 16 * a);
  return (
    <Center>
      <svg viewBox="0 0 140 80" width="100%" height="100%" aria-hidden>
        <defs>
          <filter id={filterId}>
            {/* 흐리게 번진 가장자리를 알파 대비로 다시 날카롭게 자르면, 가까운 덩어리끼리 다리가 생긴다 */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" />
          </filter>
        </defs>
        <g filter={`url(#${filterId})`} fill={color.accent}>
          <circle cx="70" cy="40" r="15" />
          <circle cx={left} cy="40" r="10" />
          <circle cx={right} cy="40" r="10" />
        </g>
      </svg>
    </Center>
  );
}

function SlideInScene({ t, still }: SceneProps) {
  const open = during(t, 500, 2600, still);
  return (
    <>
      <Stack gap="0.55rem">
        {[0, 1, 2, 3].map((i) => (
          <Row key={i}>
            <Avatar tone={color.border} />
            <Bar w={`${45 + i * 12}%`} />
          </Row>
        ))}
      </Stack>
      <Dim style={{ opacity: open ? 0.16 : 0, transition: `opacity 300ms ${easing.out}` }} />
      {/* 아래 가장자리에서 올라온다. 들어올 때는 spring으로 살짝 지나쳤다 멈추고, 나갈 때는 담백하게 내려간다 */}
      <Sheet
        style={{
          transform: open ? "translateY(0)" : "translateY(110%)",
          transition: enterExit(open, "transform", `600ms ${easing.spring}`, `400ms ${easing.inOut}`),
        }}
      >
        <Bar w="1.6rem" h="0.25rem" style={{ justifySelf: "center", background: color.borderStrong }} />
        <Row>
          <Avatar tone={color.series2} />
          <Bar w="60%" tone="soft" />
        </Row>
        <Row>
          <Avatar tone={color.series3} />
          <Bar w="42%" tone="soft" />
        </Row>
      </Sheet>
    </>
  );
}

function SpringPopScene({ t, still, period }: SceneProps) {
  const shown = during(t, 600, period - 500, still);
  const count = still || t >= 1900 ? 4 : 3;
  const curves = [
    { label: "ease-out", enter: `500ms ${easing.out}` },
    { label: "spring", enter: `500ms ${easing.spring}` },
  ];
  return (
    <Center>
      <Row style={{ gap: "1.4rem" }}>
        {curves.map((curve) => (
          <Stack key={curve.label} gap="0.6rem" style={{ justifyItems: "center" }}>
            <AppIcon>
              <Badge
                style={{
                  transform: `scale(${shown ? 1 : 0})`,
                  transition: enterExit(shown, "transform", curve.enter),
                }}
              >
                {curve.label === "spring" ? <BadgeNumber key={count}>{count}</BadgeNumber> : count}
              </Badge>
            </AppIcon>
            <Mono>{curve.label}</Mono>
          </Stack>
        ))}
      </Row>
    </Center>
  );
}

function StaggerScene({ t, still, period }: SceneProps) {
  const shown = during(t, 300, period - 600, still);
  return (
    <Stack gap="0.5rem">
      {Array.from({ length: STAGGER_ROWS }, (_, i) => {
        const delay = i * STAGGER_GAP_MS;
        return (
          <Row
            key={i}
            style={{
              opacity: shown ? 1 : 0,
              transform: shown ? "translateY(0)" : "translateY(8px)",
              // 들어올 때만 줄마다 70ms씩 늦춘다. 나갈 때는 한꺼번에 빠진다
              transition: shown
                ? `opacity 400ms ${easing.out} ${delay}ms, transform 400ms ${easing.out} ${delay}ms`
                : `opacity 250ms ${easing.out}, transform 250ms ${easing.out}`,
            }}
          >
            <Avatar tone={SERIES[i % 3]} />
            <Bar w={`${48 + ((i * 17) % 40)}%`} />
          </Row>
        );
      })}
    </Stack>
  );
}

function SharedElementScene({ t, still }: SceneProps) {
  const detail = during(t, 1000, 3300, still);
  // 같은 타일이 목록 자리에서 상세 자리로 간다. 레이아웃은 한 번에 바뀌고, 이동은 FLIP의 transform이 맡는다
  const tileRef = useFlip<HTMLDivElement>(detail ? "detail" : "list");
  const fade = (on: boolean, delay = 0) => ({
    opacity: on ? 1 : 0,
    transition: on ? `opacity 300ms ${easing.out} ${delay}ms` : `opacity 150ms ${easing.out}`,
  });
  const tapping = !still && t >= 650 && t < 1000;
  return (
    <Stage>
      <SharedElementTile
        ref={tileRef}
        style={detail ? { width: "100%", height: "4rem" } : { width: "30%", height: "2.6rem" }}
      />
      {[1, 2].map((i) => (
        <OtherTile key={i} style={{ left: `${i * 35}%`, background: color.border, ...fade(!detail) }} />
      ))}
      <Stack style={{ position: "absolute", top: "3.1rem", left: 0, right: 0, ...fade(!detail) }}>
        <Bar w="60%" />
        <Bar w="40%" />
      </Stack>
      <Stack style={{ position: "absolute", top: "4.6rem", left: 0, right: 0, ...fade(detail, 450) }}>
        <Bar w="75%" h="0.55rem" style={{ background: color.textSubtle }} />
        <Bar w="95%" />
        <Bar w="65%" />
      </Stack>
      <Finger style={{ left: "15%", top: "1.3rem", opacity: tapping ? 1 : 0, transform: `translate(-50%, -50%) scale(${tapping ? 1 : 1.4})` }} />
    </Stage>
  );
}

function RippleScene({ t, still }: SceneProps) {
  return (
    <Center>
      <TapButton>
        {RIPPLE_TAPS.map((tap, i) => {
          const rippling = still ? i === 0 : t >= tap.at && t < tap.at + 700;
          const touching = !still && t >= tap.at - 250 && t < tap.at + 150;
          return (
            <span key={i}>
              {rippling && <RippleCircle still={still} style={{ left: `${tap.x}%`, top: `${tap.y}%` }} />}
              <Finger
                style={{
                  left: `${tap.x}%`,
                  top: `${tap.y}%`,
                  borderColor: color.onAccent,
                  opacity: touching ? 0.9 : 0,
                  transform: `translate(-50%, -50%) scale(${touching && t >= tap.at ? 0.8 : 1})`,
                }}
              />
            </span>
          );
        })}
        <span style={{ position: "relative" }}>좋아요</span>
      </TapButton>
      <Mono>누른 자리가 중심이다</Mono>
    </Center>
  );
}

function PathDrawScene({ t, still, period }: SceneProps) {
  // 마운트될 때 그리기가 시작되므로, 한 바퀴마다 내렸다가 다시 올린다
  const mounted = during(t, 300, period - 80, still);
  const leaving = !still && t >= period - 450;
  return (
    <Center>
      <svg viewBox="0 0 120 70" width="100%" height="100%" aria-hidden>
        <path d="M8 6 V62 H114" fill="none" stroke={color.border} strokeWidth="1.5" />
        {mounted && (
          <g style={{ opacity: leaving ? 0 : 1, transition: `opacity 300ms ${easing.out}` }}>
            <DrawPath
              d="M10 56 L30 42 L48 48 L70 26 L90 32 L110 12"
              pathLength={1}
              fill="none"
              stroke={color.accent}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <EndDot cx="110" cy="12" r="4.5" fill={color.accent} />
          </g>
        )}
      </svg>
    </Center>
  );
}

function MarqueeScene({ running, still }: SceneProps) {
  const rows = [
    { seconds: 8, reverse: false },
    { seconds: 11, reverse: true },
  ];
  return (
    <Center style={{ justifyItems: "stretch", gap: "0.7rem" }}>
      {rows.map((row) => (
        <MarqueeWindow key={row.seconds}>
          <MarqueeTrack running={running && !still} reverse={row.reverse} seconds={row.seconds}>
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <Chip key={i}>{item}</Chip>
            ))}
          </MarqueeTrack>
        </MarqueeWindow>
      ))}
    </Center>
  );
}

function TiltScene({ t, still, period }: SceneProps) {
  const { pointer, handlers } = useTilt(!still);
  // 마우스가 없으면(터치 기기, 커서가 밖에 있을 때) 가짜 커서가 원을 그리며 대신 움직인다
  const turn = (2 * Math.PI * t) / period;
  const auto = still ? { px: -0.3, py: -0.25 } : { px: 0.35 * Math.cos(turn), py: 0.3 * Math.sin(turn) };
  const p = pointer ?? auto;
  const { rx, ry } = angleFromPointer(p.px, p.py);
  const at = { x: `${(p.px + 0.5) * 100}%`, y: `${(p.py + 0.5) * 100}%` };
  return (
    <TiltStage {...handlers}>
      <TiltCard
        style={{
          transform: `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`,
          transition: `transform ${pointer ? 120 : 60}ms ${easing.out}`,
        }}
      >
        <Photo />
        <Bar w="70%" />
        <Bar w="45%" />
        <Glare
          style={{
            background: `radial-gradient(circle at ${at.x} ${at.y}, color-mix(in srgb, ${color.surface} 55%, transparent), transparent 60%)`,
          }}
        />
      </TiltCard>
      {!pointer && <Cursor style={{ left: at.x, top: at.y }} />}
    </TiltStage>
  );
}

const SCENES: Record<MotionPattern, (props: SceneProps) => ReactNode> = {
  gooey: GooeyScene,
  "slide-in": SlideInScene,
  "spring-pop": SpringPopScene,
  stagger: StaggerScene,
  "shared-element": SharedElementScene,
  ripple: RippleScene,
  "path-draw": PathDrawScene,
  marquee: MarqueeScene,
  tilt: TiltScene,
  ...SCROLL_SCENES,
};

export function PatternCard(props: PatternCardProps) {
  const { meta, t, still } = usePatternCard(props);
  const Scene = SCENES[props.pattern];
  return (
    <Card>
      <Screen large={props.large} aria-hidden>
        <Scene t={t} still={still} running={props.running} period={meta.period} />
      </Screen>
      <Head>
        <strong>{meta.title}</strong>
        <span>{meta.hint}</span>
      </Head>
    </Card>
  );
}
