import createCache from "@emotion/cache";
import type { EmotionRegistryState } from "./emotion-registry.type";

// 렌더 중 삽입된 스타일 이름을 추적하는 캐시를 만든다. flush()로 지금까지 쌓인 이름을 비운다.
export function createRegistryState(): EmotionRegistryState {
  const cache = createCache({ key: "css" });
  cache.compat = true;

  const prevInsert = cache.insert;
  let inserted: string[] = [];

  cache.insert = (...args) => {
    const serialized = args[1];
    if (cache.inserted[serialized.name] === undefined) {
      inserted.push(serialized.name);
    }
    return prevInsert(...args);
  };

  const flush = () => {
    const prev = inserted;
    inserted = [];
    return prev;
  };

  return { cache, flush };
}

export function collectInsertedStyles({ cache, flush }: EmotionRegistryState) {
  const names = flush();
  if (names.length === 0) return null;

  const styles = names.map((name) => cache.inserted[name]).join("");
  return { names, styles };
}
