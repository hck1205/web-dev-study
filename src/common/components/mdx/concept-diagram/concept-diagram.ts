"use client";

import { useId } from "react";
import type { ConceptDiagramProps } from "./concept-diagram.type";
import { clipToNode } from "./concept-diagram.utils";

export function useConceptDiagram({ nodes, edges }: ConceptDiagramProps) {
  const uid = useId().replace(/:/g, "");
  const byId = Object.fromEntries(nodes.map((node) => [node.id, node]));

  const lines = edges.flatMap((edge, index) => {
    const a = byId[edge.from];
    const b = byId[edge.to];
    if (!a || !b) return [];
    const start = clipToNode(a, b);
    const end = clipToNode(b, a);
    return [{ key: index, edge, start, end, mid: { x: (start.x + end.x) / 2, y: (start.y + end.y) / 2 } }];
  });

  return { uid, lines };
}
