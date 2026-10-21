"use client";

import type { ReactNode } from "react";
import { anim, color } from "@/common/design-system";
import type { ScrollPattern } from "../../motion-demo.type";
import { Avatar, Bar, Finger, Row, Stack } from "../pattern-card.styled";
import type { SceneProps } from "../pattern-card.type";
import {
  At,
  Blob,
  Dot,
  Dots,
  DotField,
  FrontCard,
  HCard,
  HSection,
  HTrack,
  Label,
  Layer,
  ProgressBadge,
  ProgressFill,
  ProgressTrack,
  RevealCard,
  SnapCard,
  SnapGuide,
  SnapTrack,
  SpeedTag,
  StepNo,
  StickyHead,
  StoryBar,
  StoryGraphic,
  StoryStep,
  StorySteps,
  Threshold,
  TriggerLine,
  VScroll,
  VThumb,
  Viewport,
  ZoomImage,
} from "./scroll-scenes.styled";
import {
  HSCROLL,
  PARALLAX,
  PROGRESS,
  REVEAL,
  SNAP,
  STICKY,
  STORY,
  ZOOM,
  hscrollState,
  scrollOf,
  snapOffset,
  snapState,
  stickyTop,
  storyActive,
  zoomScale,
} from "./scroll-scenes.utils";

const { easing } = anim;
const SERIES = [color.series1, color.series2, color.series3];
const SMALL_DOT = { width: "0.7rem", height: "0.7rem" };

/** 시계는 초당 30번 바뀐다. 그 사이를 짧은 선형 transition이 메워 스크롤처럼 보이게 한다 */
const follow = (still: boolean, prop = "transform") => (still ? undefined : `${prop} 60ms linear`);
const lift = (rem: number) => `translateY(${-rem}rem)`;

function StickyScene({ t, still }: SceneProps) {
  const s = scrollOf(STICKY.plan, t, still);
  const { sections, headH, rowH } = STICKY;
  return (
    <Viewport>
      <Layer style={{ transform: lift(s), transition: follow(still) }}>
        {sections.flatMap((sec, si) =>
          Array.from({ length: sec.rows }, (_, i) => (
            <At key={`${sec.label}${i}`} style={{ top: `${sec.y + headH + 0.25 + i * rowH}rem` }}>
              <Row>
                <Avatar tone={SERIES[(i + si) % 3]} style={SMALL_DOT} />
                <Bar w={`${50 + ((i * 23 + si * 11) % 40)}%`} />
              </Row>
            </At>
          )),
        )}
      </Layer>
      {/* 머리글은 스크롤 층 밖에서 직접 위치를 계산한다: 원래 자리 → top: 0에 붙음 → 다음 머리글에 밀림 */}
      {sections.map((sec, i) => {
        const stuck = s > sec.y + 0.05;
        return (
          <StickyHead
            key={sec.label}
            stuck={stuck}
            style={{
              top: `${stickyTop(sec.y, s, sections[i + 1]?.y, headH)}rem`,
              height: `${headH}rem`,
              transition: still ? undefined : `top 60ms linear, background 200ms ${easing.out}, color 200ms ${easing.out}`,
            }}
          >
            <span>{sec.label}</span>
            {stuck && <Label style={{ color: "inherit" }}>top: 0</Label>}
          </StickyHead>
        );
      })}
    </Viewport>
  );
}

function SnapScene({ t, still }: SceneProps) {
  const { index, drag, dragging, rewinding } = snapState(t, still);
  // 손가락을 따라갈 때는 바로, 놓은 뒤에는 가장 가까운 칸으로 감속하며 선다
  const transition = still
    ? undefined
    : dragging
      ? "transform 60ms linear"
      : rewinding
        ? `transform 700ms ${easing.inOut}`
        : `transform 450ms ${easing.out}`;
  return (
    <Viewport>
      <SnapGuide />
      <SnapTrack style={{ transform: `translateX(${snapOffset(index, drag)}%)`, transition }}>
        {Array.from({ length: SNAP.cards }, (_, i) => (
          <SnapCard
            key={i}
            active={i === index && !dragging}
            style={{
              width: `${SNAP.cardW}%`,
              marginRight: `${SNAP.gap}%`,
              background: `linear-gradient(135deg, ${SERIES[i % 3]}, ${color.accent})`,
            }}
          >
            <Bar w="60%" style={{ background: color.surface, opacity: 0.85 }} />
            <Bar w="35%" style={{ background: color.surface, opacity: 0.6 }} />
          </SnapCard>
        ))}
      </SnapTrack>
      <Finger
        style={{
          left: `${72 - (drag / SNAP.dragMax) * 30}%`,
          top: "36%",
          opacity: dragging ? 1 : 0,
          transition: `opacity 200ms ${easing.out}`,
        }}
      />
      <Dots>
        {Array.from({ length: SNAP.cards }, (_, i) => (
          <Dot key={i} active={i === index} />
        ))}
      </Dots>
    </Viewport>
  );
}

function RevealScene({ t, still }: SceneProps) {
  const s = scrollOf(REVEAL.plan, t, still);
  const fading = !still && t >= REVEAL.fadeOutAt;
  return (
    <Viewport>
      <Layer
        style={{
          transform: lift(s),
          opacity: fading ? 0 : 1,
          transition: still ? undefined : `transform 60ms linear, opacity 300ms ${easing.out}`,
        }}
      >
        {REVEAL.cards.map((y, i) => {
          // 카드 윗변이 기준선 위로 올라오면 나타난다. 한 번 나타나면 화면을 떠날 때까지 그대로다
          const shown = y - s < REVEAL.threshold;
          return (
            <RevealCard
              key={y}
              style={{
                top: `${y}rem`,
                height: `${REVEAL.cardH}rem`,
                opacity: shown ? 1 : 0,
                transform: shown ? "translateY(0)" : "translateY(0.8rem)",
                transition: shown
                  ? `opacity 400ms ${easing.out}, transform 400ms ${easing.out}`
                  : `opacity 150ms ${easing.out}, transform 150ms ${easing.out}`,
              }}
            >
              <Row>
                <Avatar tone={SERIES[i % 3]} />
                <Bar w={`${45 + ((i * 19) % 35)}%`} />
              </Row>
              <Bar w="85%" />
            </RevealCard>
          );
        })}
      </Layer>
      <Threshold style={{ top: `${REVEAL.threshold}rem` }}>
        <span>기준선</span>
      </Threshold>
    </Viewport>
  );
}

function ProgressScene({ t, still }: SceneProps) {
  const s = scrollOf(PROGRESS.plan, t, still);
  const ratio = s / PROGRESS.max;
  return (
    <Viewport>
      <ProgressTrack>
        {/* 폭 대신 scaleX로 채운다. 레이아웃을 다시 계산하지 않는다 */}
        <ProgressFill style={{ transform: `scaleX(${ratio})`, transformOrigin: "left", transition: follow(still) }} />
      </ProgressTrack>
      <ProgressBadge>{Math.round(ratio * 100)}%</ProgressBadge>
      <Layer style={{ transform: lift(s), transition: follow(still) }}>
        <At style={{ top: "0.8rem" }}>
          <Bar w="62%" h="0.6rem" style={{ background: color.textSubtle }} />
        </At>
        {Array.from({ length: PROGRESS.lines }, (_, i) => (
          <At key={i} style={{ top: `${1.9 + i * PROGRESS.lineGap + Math.floor(i / 6) * 0.35}rem` }}>
            <Bar w={i % 6 === 5 ? "48%" : `${82 + ((i * 7) % 16)}%`} />
          </At>
        ))}
      </Layer>
    </Viewport>
  );
}

function ZoomScene({ t, still }: SceneProps) {
  const s = scrollOf(ZOOM.plan, t, still);
  const scale = zoomScale(s);
  return (
    <Viewport>
      <Layer style={{ transform: lift(s), transition: follow(still) }}>
        {[0.2, 0.9, 1.6].map((y, i) => (
          <At key={y} style={{ top: `${y}rem` }}>
            <Bar w={`${80 - i * 12}%`} />
          </At>
        ))}
        <ZoomImage
          style={{
            top: `${ZOOM.imageY}rem`,
            height: `${ZOOM.imageH}rem`,
            transform: `scale(${scale})`,
            transition: follow(still),
          }}
        >
          <span>scale {scale.toFixed(2)}</span>
        </ZoomImage>
        {Array.from({ length: 6 }, (_, i) => (
          <At key={i} style={{ top: `${ZOOM.imageY + ZOOM.imageH + 0.5 + i * 0.7}rem` }}>
            <Bar w={`${88 - ((i * 13) % 30)}%`} />
          </At>
        ))}
      </Layer>
    </Viewport>
  );
}

function ParallaxScene({ t, still }: SceneProps) {
  const s = scrollOf(PARALLAX.plan, t, still);
  return (
    <Viewport>
      {/* 배경 층은 스크롤의 0.3배만 움직인다. 같은 스크롤인데 멀리 있는 것처럼 보인다 */}
      <Layer style={{ transform: lift(s * PARALLAX.bgSpeed), transition: follow(still) }}>
        <DotField />
        {PARALLAX.blobs.map((b, i) => (
          <Blob
            key={i}
            style={{ left: `${b.x}%`, top: `${b.y}rem`, width: `${b.r}rem`, height: `${b.r}rem`, background: SERIES[i] }}
          />
        ))}
      </Layer>
      <Layer style={{ transform: lift(s), transition: follow(still) }}>
        {PARALLAX.cards.map((y, i) => (
          <FrontCard key={y} style={{ top: `${y}rem` }}>
            <Row>
              <Avatar tone={SERIES[i % 3]} />
              <Bar w={`${50 + ((i * 17) % 30)}%`} />
            </Row>
            <Bar w="85%" />
          </FrontCard>
        ))}
      </Layer>
      <SpeedTag style={{ left: 0, bottom: 0 }}>배경 0.3x</SpeedTag>
      <SpeedTag style={{ right: 0, bottom: 0 }}>글 1x</SpeedTag>
    </Viewport>
  );
}

function HScrollScene({ t, still }: SceneProps) {
  const s = scrollOf(HSCROLL.plan, t, still);
  const { top, p, pinned } = hscrollState(s);
  const { pinAt, pinFor, sectionH, cards, cardW, gap, max } = HSCROLL;
  // 붙어 있는 동안 세로로 간 거리만큼 트랙이 왼쪽으로 간다. 마지막 카드가 첫 카드 자리에 오면 끝
  const shift = p * (cards - 1) * (cardW + gap);
  return (
    <Viewport>
      <Layer style={{ transform: lift(s), transition: follow(still) }}>
        {[0.2, 0.95, 1.7].map((y, i) => (
          <At key={y} style={{ top: `${y}rem` }}>
            <Bar w={`${75 - i * 10}%`} />
          </At>
        ))}
        {Array.from({ length: 5 }, (_, i) => (
          <At key={i} style={{ top: `${pinAt + pinFor + sectionH + 0.4 + i * 0.75}rem` }}>
            <Bar w={`${85 - ((i * 11) % 25)}%`} />
          </At>
        ))}
      </Layer>
      <HSection pinned={pinned} style={{ top: `${top}rem`, height: `${sectionH}rem`, transition: follow(still, "top") }}>
        <Label style={{ paddingLeft: `${gap}%`, color: pinned ? color.accent : undefined }}>
          {pinned ? "고정 · 가로 이동" : "가로 섹션"}
        </Label>
        <HTrack style={{ transform: `translateX(${-shift}%)`, transition: follow(still) }}>
          {Array.from({ length: cards }, (_, i) => (
            <HCard
              key={i}
              style={{
                width: `${cardW}%`,
                marginLeft: i === 0 ? `${gap}%` : 0,
                marginRight: `${gap}%`,
                background: `linear-gradient(135deg, ${SERIES[i % 3]}, ${color.accent})`,
              }}
            >
              {i + 1}
            </HCard>
          ))}
        </HTrack>
      </HSection>
      <VScroll>
        <VThumb style={{ top: `${(s / max) * 75}%`, transition: follow(still, "top") }} />
      </VScroll>
    </Viewport>
  );
}

function StoryScene({ t, still }: SceneProps) {
  const s = scrollOf(STORY.plan, t, still);
  const active = storyActive(s);
  const { graphicH, steps, stepH, trigger, base, grown } = STORY;
  return (
    <Viewport>
      {/* 그림은 위에 붙어 있고, 글 카드가 트리거 선을 넘을 때마다 그림의 상태가 바뀐다 */}
      <StoryGraphic style={{ height: `${graphicH}rem` }}>
        {base.map((h, i) => {
          const on = i === active;
          return (
            <StoryBar
              key={i}
              style={{
                transform: `scaleY(${on ? grown[i] : h})`,
                background: on ? color.accent : color.borderStrong,
                filter: on ? `drop-shadow(0 0 4px ${color.accent})` : "none",
              }}
            />
          );
        })}
      </StoryGraphic>
      <StorySteps style={{ top: `${graphicH}rem` }}>
        <TriggerLine style={{ top: `${trigger}rem` }} />
        <Layer style={{ transform: lift(s), transition: follow(still) }}>
          {steps.map((y, i) => (
            <StoryStep key={y} active={i === active} style={{ top: `${y}rem`, height: `${stepH}rem` }}>
              <StepNo active={i === active}>{i + 1}</StepNo>
              <Stack style={{ flex: 1 }}>
                <Bar w="80%" />
                <Bar w="55%" />
              </Stack>
            </StoryStep>
          ))}
        </Layer>
      </StorySteps>
    </Viewport>
  );
}

export const SCROLL_SCENES: Record<ScrollPattern, (props: SceneProps) => ReactNode> = {
  sticky: StickyScene,
  "scroll-snap": SnapScene,
  "scroll-reveal": RevealScene,
  "scroll-progress": ProgressScene,
  "zoom-on-scroll": ZoomScene,
  parallax: ParallaxScene,
  "horizontal-scroll": HScrollScene,
  scrollytelling: StoryScene,
};
