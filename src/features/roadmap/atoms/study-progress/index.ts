"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { studyProgressAtom } from "./utils";

export type { AppliedResult, CheckpointResult, PostProgress, Stage, StudyProgress } from "./types";
export {
  BOX_INTERVAL_DAYS,
  EMPTY_PROGRESS,
  MAX_BOX,
  PASS_RATIO,
  STAGE_HINTS,
  STAGE_LABELS,
  isDue,
  localDate,
  parseProgress,
  raiseStage,
  recordApplied,
  recordCheckpoint,
  reviewPost,
  saveExplanation,
  setStage,
  stageCounts,
  stageOf,
} from "./utils";

export const useGetStudyProgress = () => useAtomValue(studyProgressAtom);
export const useSetStudyProgress = () => useSetAtom(studyProgressAtom);
export const useResetStudyProgress = () => useResetAtom(studyProgressAtom);
