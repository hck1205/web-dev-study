"use client";

import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { EdgePath, RoadmapGraphProps } from "./roadmap-graph.type";
import { edgeCurve, layerNodes } from "./roadmap-graph.utils";

/**
 * 노드는 HTML 카드로 층마다 한 줄씩 놓고, 연결선은 그 위에 겹친 SVG로 그린다.
 * 카드 위치를 재서 선을 다시 그리므로 화면 폭이 바뀌어 줄이 접혀도 선이 따라간다.
 */
export function useRoadmapGraph({ nodes, edges }: RoadmapGraphProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef(new Map<string, HTMLElement>());
  const [paths, setPaths] = useState<EdgePath[]>([]);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [focusId, setFocusId] = useState<string | null>(null);

  const layers = useMemo(() => layerNodes(nodes, edges), [nodes, edges]);

  const measure = useCallback(() => {
    const root = rootRef.current;
    if (!root) return;
    const box = root.getBoundingClientRect();
    // 층을 건너뛰는 선이 중간 카드를 피해 가도록 층마다 카드 위치를 모아 둔다
    const layerOf = new Map<string, number>();
    layers.forEach((layer, index) => layer.forEach((node) => layerOf.set(node.id, index)));
    const layerRects = layers.map((layer) =>
      layer.flatMap((node) => {
        const element = nodeRefs.current.get(node.id);
        return element ? [element.getBoundingClientRect()] : [];
      }),
    );
    const next: EdgePath[] = [];
    for (const edge of edges) {
      const from = nodeRefs.current.get(edge.from);
      const to = nodeRefs.current.get(edge.to);
      if (!from || !to) continue;
      const fromLayer = layerOf.get(edge.from) ?? 0;
      const toLayer = layerOf.get(edge.to) ?? 0;
      const between = toLayer > fromLayer + 1 ? layerRects.slice(fromLayer + 1, toLayer) : [];
      next.push({
        key: `${edge.from}->${edge.to}`,
        d: edgeCurve(from.getBoundingClientRect(), to.getBoundingClientRect(), box, between),
        from: edge.from,
        to: edge.to,
        kind: edge.kind,
        met: edge.met,
      });
    }
    setPaths(next);
    setSize({ width: box.width, height: box.height });
  }, [edges, layers]);

  useLayoutEffect(() => {
    measure();
    const root = rootRef.current;
    if (!root) return;
    const observer = new ResizeObserver(measure);
    observer.observe(root);
    // 웹 폰트가 늦게 오면 카드 높이가 바뀐다
    document.fonts?.ready.then(measure).catch(() => undefined);
    return () => observer.disconnect();
  }, [measure, layers]);

  const registerNode = useCallback(
    (id: string) => (element: HTMLElement | null) => {
      if (element) nodeRefs.current.set(id, element);
      else nodeRefs.current.delete(id);
    },
    [],
  );

  // 노드에 마우스나 포커스가 가면 그 노드에 닿는 선만 밝힌다
  const related = useMemo(() => {
    if (!focusId) return null;
    const ids = new Set([focusId]);
    for (const edge of edges) {
      if (edge.from === focusId) ids.add(edge.to);
      if (edge.to === focusId) ids.add(edge.from);
    }
    return ids;
  }, [edges, focusId]);

  return { rootRef, registerNode, layers, paths, size, focusId, setFocusId, related };
}
