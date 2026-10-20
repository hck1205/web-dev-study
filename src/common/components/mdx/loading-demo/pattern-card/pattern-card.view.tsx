"use client";

import { color } from "@/common/design-system";
import type { LoadingPattern } from "../loading-demo.type";
import { STREAM_TEXT, progress } from "../loading-demo.utils";
import { usePatternCard } from "./pattern-card";
import {
  Bar,
  Card,
  Caret,
  Center,
  Dot,
  Fill,
  Head,
  Heart,
  Mono,
  Pill,
  Row,
  Screen,
  Shimmer,
  Small,
  Spinner,
  Stack,
  Tile,
  Track,
} from "./pattern-card.styled";
import type { PatternCardProps } from "./pattern-card.type";

const SERIES = [color.series1, color.series2, color.series3];
const fade = (value: number) => ({ opacity: value, transform: `translateY(${(1 - value) * 4}px)` });

/** 패턴마다 시계(t, ms)에 따라 한 장면을 그린다 */
function Scene({ pattern, t }: { pattern: LoadingPattern; t: number }) {
  switch (pattern) {
    case "spinner":
      return (
        <Center>
          <Spinner />
          <Mono>불러오는 중</Mono>
        </Center>
      );

    case "skeleton": {
      const shown = progress(t, 1800, 2100);
      if (shown === 0)
        return (
          <Stack gap="0.55rem">
            <Row>
              <Shimmer w="1.6rem" h="1.6rem" round />
              <Stack style={{ flex: 1 }}>
                <Shimmer w="70%" />
                <Shimmer w="45%" />
              </Stack>
            </Row>
            <Shimmer h="3.2rem" />
          </Stack>
        );
      return (
        <Stack gap="0.55rem" style={fade(shown)}>
          <Row>
            <span style={{ width: "1.6rem", height: "1.6rem", borderRadius: "50%", background: color.series1 }} />
            <Stack style={{ flex: 1 }}>
              <Small>
                <strong>matt</strong>
              </Small>
              <Mono>3분 전</Mono>
            </Stack>
          </Row>
          <div style={{ height: "3.2rem", borderRadius: 6, background: `linear-gradient(120deg, ${color.series1}, ${color.series3})` }} />
        </Stack>
      );
    }

    case "progress-bar": {
      const pct = Math.round(progress(t, 200, 3200) * 100);
      return (
        <Center style={{ justifyItems: "stretch" }}>
          <Row style={{ justifyContent: "space-between" }}>
            <Mono>upload.pdf</Mono>
            <Mono style={{ color: color.text }}>{pct === 100 ? "완료" : `${pct}%`}</Mono>
          </Row>
          <Track>
            <Fill style={{ width: `${pct}%`, background: pct === 100 ? color.success : color.accent }} />
          </Track>
        </Center>
      );
    }

    case "lazy-loading":
      return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.4rem", height: "100%" }}>
          {Array.from({ length: 6 }, (_, i) => {
            const shown = progress(t, 300 + i * 420, 600 + i * 420);
            return (
              <Tile
                key={i}
                style={{
                  background: shown > 0 ? `linear-gradient(135deg, ${SERIES[i % 3]}, ${SERIES[(i + 1) % 3]})` : color.border,
                  opacity: shown > 0 ? 0.35 + shown * 0.65 : 1,
                  transform: `scale(${0.94 + shown * 0.06})`,
                }}
              />
            );
          })}
        </div>
      );

    case "progress-ring": {
      const ratio = progress(t, 200, 3200);
      const r = 26;
      const circumference = 2 * Math.PI * r;
      return (
        <Center>
          <svg width="68" height="68" viewBox="0 0 68 68" aria-hidden>
            <circle cx="34" cy="34" r={r} fill="none" stroke={color.border} strokeWidth="6" />
            <circle
              cx="34"
              cy="34"
              r={r}
              fill="none"
              stroke={ratio === 1 ? color.success : color.accent}
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - ratio)}
              transform="rotate(-90 34 34)"
            />
            <text x="34" y="38" textAnchor="middle" fontSize="12" fontWeight="700" fill={color.text}>
              {Math.round(ratio * 100)}%
            </text>
          </svg>
          <Mono>{ratio === 1 ? "설치 완료" : "설치 중"}</Mono>
        </Center>
      );
    }

    case "blur-up": {
      const sharp = progress(t, 900, 1900);
      return (
        <div style={{ position: "relative", height: "100%", overflow: "hidden", borderRadius: 6 }}>
          <div
            style={{
              position: "absolute",
              inset: "-12px",
              filter: `blur(${(1 - sharp) * 10}px)`,
              background: `radial-gradient(circle at 30% 40%, ${color.series2} 0 18%, transparent 19%), radial-gradient(circle at 70% 65%, ${color.series3} 0 22%, transparent 23%), linear-gradient(160deg, ${color.series1}, ${color.accent})`,
            }}
          />
          <Mono style={{ position: "absolute", top: 6, left: 6, padding: "1px 6px", borderRadius: 999, background: color.surface }}>
            {sharp < 1 ? "20px 미리보기" : "원본"}
          </Mono>
        </div>
      );
    }

    case "stepper": {
      const current = t < 1200 ? 0 : t < 2400 ? 1 : t < 3400 ? 2 : 3;
      const labels = ["업로드", "처리", "완료"];
      return (
        <Center>
          <Row>
            {labels.map((label, i) => (
              <Row key={label}>
                {i > 0 && <Bar w="1.1rem" h="2px" style={{ background: i <= current ? color.accent : color.border }} />}
                <Dot state={i < current ? "done" : i === current ? "active" : "todo"}>{i < current ? "✓" : i + 1}</Dot>
              </Row>
            ))}
          </Row>
          <Mono>{current < 3 ? labels[current] : "모두 끝"}</Mono>
        </Center>
      );
    }

    case "infinite-scroll": {
      const loading = t > 1900 && t < 2700;
      const rows = t >= 2700 ? 9 : 5;
      const offset = progress(t, 200, 1900) * 46 + progress(t, 2700, 4200) * 64;
      return (
        <div style={{ height: "100%", overflow: "hidden" }}>
          <Stack gap="0.45rem" style={{ transform: `translateY(${-offset}px)` }}>
            {Array.from({ length: rows }, (_, i) => (
              <Row key={i} style={i >= 5 ? fade(progress(t, 2700, 3000)) : undefined}>
                <span style={{ width: "0.9rem", height: "0.9rem", borderRadius: 4, background: SERIES[i % 3], flex: "none" }} />
                <Bar w={`${55 + ((i * 17) % 35)}%`} />
              </Row>
            ))}
            <Center style={{ height: "1.6rem", opacity: loading ? 1 : 0 }}>
              <Spinner size="1rem" />
            </Center>
          </Stack>
        </div>
      );
    }

    case "streaming-text": {
      if (t < 700)
        return (
          <Stack>
            <Shimmer w="85%" />
            <Shimmer w="60%" />
          </Stack>
        );
      const count = Math.round(progress(t, 700, 4000) * STREAM_TEXT.length);
      return (
        <Small>
          {STREAM_TEXT.slice(0, count)}
          {count < STREAM_TEXT.length && <Caret />}
        </Small>
      );
    }

    case "optimistic-ui": {
      const liked = t > 800;
      const confirmed = t > 2200;
      return (
        <Center>
          <Row>
            <Heart on={liked}>♥</Heart>
            <Mono style={{ color: color.text, fontSize: "0.85rem" }}>{liked ? 129 : 128}</Mono>
          </Row>
          <Mono style={{ color: confirmed ? color.success : color.textSubtle }}>
            {!liked ? "누르기 전" : confirmed ? "✓ 서버 반영됨" : "화면 먼저, 저장 중"}
          </Mono>
        </Center>
      );
    }

    case "pull-to-refresh": {
      const pull = t < 900 ? progress(t, 0, 900) : t < 2200 ? 1 : 1 - progress(t, 2200, 2600);
      const fresh = t >= 2200;
      return (
        <div style={{ height: "100%", overflow: "hidden" }}>
          <Center style={{ height: `${pull * 2.2}rem`, overflow: "hidden" }}>
            {t >= 900 && t < 2200 ? (
              <Spinner size="1rem" />
            ) : (
              <span style={{ color: color.textSubtle, transform: `rotate(${pull * 180}deg)`, fontSize: "0.85rem" }}>↓</span>
            )}
          </Center>
          <Stack gap="0.45rem">
            {fresh && (
              <Row style={fade(progress(t, 2200, 2500))}>
                <span style={{ width: "0.9rem", height: "0.9rem", borderRadius: 4, background: color.accent }} />
                <Bar w="70%" style={{ background: color.accentSoft }} />
              </Row>
            )}
            {[0, 1, 2, 3].map((i) => (
              <Row key={i}>
                <span style={{ width: "0.9rem", height: "0.9rem", borderRadius: 4, background: color.border }} />
                <Bar w={`${50 + i * 10}%`} />
              </Row>
            ))}
          </Stack>
        </div>
      );
    }

    case "loading-button": {
      const phase = t < 700 ? "idle" : t < 2200 ? "saving" : "saved";
      return (
        <Center>
          <Pill tone={phase === "saved" ? "success" : "accent"} aria-busy={phase === "saving"}>
            {phase === "saving" && <Spinner size="0.8rem" onAccent />}
            {phase === "idle" ? "저장" : phase === "saving" ? "저장 중" : "✓ 저장됨"}
          </Pill>
        </Center>
      );
    }
  }
}

export function PatternCard(props: PatternCardProps) {
  const { meta, t } = usePatternCard(props);
  return (
    <Card>
      <Screen large={props.large} aria-hidden>
        <Scene pattern={props.pattern} t={t} />
      </Screen>
      <Head>
        <strong>{meta.title}</strong>
        <span>{meta.hint}</span>
      </Head>
    </Card>
  );
}
