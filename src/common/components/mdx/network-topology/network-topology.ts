"use client";

import { useId, useMemo } from "react";
import { useInView } from "@/common/hooks/use-in-view";
import { useStepPlayer } from "@/common/hooks/use-step-player";
import { usePacketMotion } from "./hooks/use-packet-motion";
import type { NetworkTopologyProps } from "./network-topology.type";
import { clipToNode, linkKey, pathLinkKeys, pathPoints, pointAlong, travelDuration } from "./network-topology.utils";

export function useNetworkTopology({ nodes, links, steps = [] }: NetworkTopologyProps) {
  const uid = useId().replace(/:/g, "");
  const { ref, inView } = useInView<HTMLDivElement>();
  const player = useStepPlayer(Math.max(steps.length, 1), 2400);
  const byId = useMemo(() => Object.fromEntries(nodes.map((node) => [node.id, node])), [nodes]);

  const stepped = steps.length > 0;
  const step = stepped ? steps[player.index] : undefined;
  const path = step?.path ?? [];
  const activeLinks = pathLinkKeys(path);
  const activeIds = new Set([...path, ...(step?.highlight ?? [])]);

  const lines = links.flatMap((link, index) => {
    const a = byId[link.from];
    const b = byId[link.to];
    if (!a || !b) return [];
    const start = clipToNode(a, b);
    const end = clipToNode(b, a);
    return [{ key: index, link, start, end, active: activeLinks.has(linkKey(link.from, link.to)) }];
  });

  // 패킷이 지나는 홉을 순서대로: 선이 차례로 그려지도록 홉마다 지연을 준다
  const hops = path.slice(1).flatMap((id, index) => {
    const a = byId[path[index]];
    const b = byId[id];
    if (!a || !b) return [];
    const start = clipToNode(a, b);
    const end = clipToNode(b, a);
    return [{ key: `${path[index]}-${id}`, d: `M${start.x},${start.y} L${end.x},${end.y}`, order: index }];
  });

  const points = pathPoints(path, byId);
  const duration = travelDuration(hops.length);
  const motion = usePacketMotion(
    (t) => (points.length > 0 ? pointAlong(points, t) : { x: 0, y: 0 }),
    `${player.index}`,
    duration,
    inView && points.length > 1,
  );
  const last = points[points.length - 1];

  return { uid, ref, inView, player, stepped, step, lines, hops, duration, activeIds, motion, last };
}
