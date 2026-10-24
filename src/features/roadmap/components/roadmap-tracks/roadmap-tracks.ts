"use client";

import { useMemo, useState } from "react";
import { useGetStudyProgress } from "../../atoms/study-progress";
import { trackStats } from "../../hooks/use-roadmap-stats";
import { TRACKS } from "../../registry";

export function useRoadmapTracks() {
  const progress = useGetStudyProgress();
  const [trackId, setTrackId] = useState(TRACKS[0].id);
  const track = TRACKS.find((item) => item.id === trackId) ?? TRACKS[0];
  const stats = useMemo(() => trackStats(track, progress), [track, progress]);

  return {
    tracks: TRACKS.map((item) => ({ id: item.id, label: item.label })),
    track,
    steps: stats.steps,
    total: stats.total,
    selectTrack: setTrackId,
  };
}
