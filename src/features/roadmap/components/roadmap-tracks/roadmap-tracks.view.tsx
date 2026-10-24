"use client";

import { ChoiceChip } from "@/common/design-system";
import { ProgressBar } from "../progress-bar";
import { useRoadmapTracks } from "./roadmap-tracks";
import { Chips, Intro, NextTag, RoadmapLink, RoadmapLinks, Step, StepHead, StepMeta, StepNumber, Steps } from "./roadmap-tracks.styled";

export function RoadmapTracks() {
  const { tracks, track, steps, total, selectTrack } = useRoadmapTracks();

  return (
    <div>
      <Chips role="group" aria-label="직무">
        {tracks.map((item) => (
          <ChoiceChip key={item.id} selected={item.id === track.id} onClick={() => selectTrack(item.id)}>
            {item.label}
          </ChoiceChip>
        ))}
      </Chips>
      <Intro>
        {track.description} 단원 순서는 <a href={track.source}>roadmap.sh</a>을 참고했다.
      </Intro>
      <ProgressBar counts={total.counts} total={total.total} withText />

      <Steps>
        {steps.map((step, index) => (
          <Step
            key={`${track.id}-${step.label}`}
            reached={step.stats.total > 0 && step.stats.started === step.stats.total}
            current={step.isNext}
            last={index === steps.length - 1}
            style={{ animationDelay: `${index * 40}ms` }}
          >
            <StepHead>
              <StepNumber>{index + 1}</StepNumber>
              <h3>{step.label}</h3>
              {step.isNext && <NextTag>지금</NextTag>}
            </StepHead>
            <ProgressBar counts={step.stats.counts} total={step.stats.total} />
            <StepMeta>
              {step.stats.total > 0 ? `새 글 ${step.stats.total}편 · 적용 ${step.stats.done}편` : "앞 단계에서 이미 읽은 로드맵"}
            </StepMeta>
            <RoadmapLinks>
              {step.roadmaps.map((roadmap) => (
                <li key={roadmap.key}>
                  <RoadmapLink href={roadmap.href}>{roadmap.label}</RoadmapLink>
                </li>
              ))}
            </RoadmapLinks>
          </Step>
        ))}
      </Steps>
    </div>
  );
}
