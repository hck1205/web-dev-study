import type { PlaygroundLanguage, RunResult, TestCase } from "./code-playground.type";

/**
 * Web Worker 안에서 돌릴 스크립트. 페이지와 분리된 스레드라서 무한 루프가 나도 화면이 멈추지 않고,
 * 시간이 넘으면 worker째로 종료한다. DOM·쿠키에도 접근할 수 없다.
 */
const WORKER_SOURCE = `
const fmt = (v) => {
  if (typeof v === "string") return JSON.stringify(v);
  if (v === undefined) return "undefined";
  if (typeof v === "function") return "[Function]";
  if (typeof v === "bigint") return v + "n";
  if (Number.isNaN(v)) return "NaN";
  try {
    return JSON.stringify(v, (k, x) => x instanceof Map ? Object.fromEntries(x) : x instanceof Set ? [...x] : typeof x === "bigint" ? x + "n" : x);
  } catch (e) { return String(v); }
};
const show = (v) => typeof v === "string" ? v : fmt(v);
const canon = (v) => Array.isArray(v) ? v.map(canon).map((x) => fmt(x)).sort() : v;
const equal = (a, b) => fmt(a) === fmt(b);

self.onmessage = (event) => {
  const { code, functionName, tests } = event.data;
  const logs = [];
  const push = (prefix) => (...args) => { if (logs.length < 200) logs.push(prefix + args.map(show).join(" ")); };
  const sandboxConsole = { log: push(""), info: push(""), warn: push("⚠ "), error: push("✕ "), table: push("") };
  const started = performance.now();
  let fn;
  try {
    const body = code + "\\n;return " + (functionName ? "typeof " + functionName + " === 'function' ? " + functionName + " : undefined" : "undefined") + ";";
    fn = new Function("console", body)(sandboxConsole);
  } catch (error) {
    self.postMessage({ status: "error", message: String(error && error.stack ? error.message : error), logs });
    return;
  }
  if (functionName && !fn) {
    self.postMessage({ status: "error", message: functionName + " 함수를 찾을 수 없다. 이름을 바꾸지 않았는지 확인해 보자.", logs });
    return;
  }
  const results = (functionName ? tests : []).map((test) => {
    const args = structuredClone(test.args);
    const label = test.label || functionName + "(" + test.args.map(fmt).join(", ") + ")";
    const t0 = performance.now();
    try {
      const actual = fn(...args);
      const ms = performance.now() - t0;
      const pass = test.compare === "unordered" ? equal(canon(actual), canon(test.expected)) : equal(actual, test.expected);
      return { label, expected: fmt(test.expected), actual: fmt(actual), pass, ms };
    } catch (error) {
      return { label, expected: fmt(test.expected), error: String(error), pass: false, ms: performance.now() - t0 };
    }
  });
  self.postMessage({ status: "done", tests: results, logs, ms: performance.now() - started });
};
`;

let workerUrl: string | null = null;

function createWorker() {
  workerUrl ??= URL.createObjectURL(new Blob([WORKER_SOURCE], { type: "text/javascript" }));
  return new Worker(workerUrl);
}

/** TypeScript는 타입만 지워서 실행한다 (타입 검사는 하지 않는다). 변환기는 처음 쓸 때 불러온다. */
export async function toJavaScript(code: string, language: PlaygroundLanguage) {
  if (language === "javascript") return code;
  const { transform } = await import("sucrase");
  return transform(code, { transforms: ["typescript"], disableESTransforms: true }).code;
}

export function runInWorker(code: string, functionName: string | undefined, tests: TestCase[], timeoutMs: number) {
  return new Promise<RunResult>((resolve) => {
    const worker = createWorker();
    const timer = window.setTimeout(() => {
      worker.terminate();
      resolve({ status: "timeout", logs: [] });
    }, timeoutMs);

    worker.onmessage = (event: MessageEvent<RunResult>) => {
      window.clearTimeout(timer);
      worker.terminate();
      resolve(event.data);
    };
    worker.onerror = (event) => {
      window.clearTimeout(timer);
      worker.terminate();
      resolve({ status: "error", message: event.message, logs: [] });
    };
    worker.postMessage({ code, functionName, tests });
  });
}

export const formatMs = (ms: number) => (ms < 1 ? "<1ms" : `${ms.toFixed(ms < 10 ? 1 : 0)}ms`);
