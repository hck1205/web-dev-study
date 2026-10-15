import { color } from "@/common/design-system";
import type { VectorGroup } from "./vector-space.type";

/** 범주형 색은 고정 순서로 배정한다 (dataviz 검증: 3색까지 모든 쌍 구분 가능). */
const SERIES = [color.series1, color.series2, color.series3];

export function groupColors(groups: VectorGroup[] = []) {
  return Object.fromEntries(groups.slice(0, SERIES.length).map((group, index) => [group.id, SERIES[index]]));
}

/** 원점(왼쪽 아래) 위치. 벡터 화살표의 시작점 */
export const originOf = (height: number) => ({ x: 24, y: height - 20 });
