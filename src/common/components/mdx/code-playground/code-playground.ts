"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CodePlaygroundProps, RunResult } from "./code-playground.type";
import { runInWorker, toJavaScript } from "./code-playground.utils";
import { useCodeEditor } from "./hooks/use-code-editor";

export function useCodePlayground({
  initialCode,
  language = "javascript",
  functionName,
  tests = [],
  solution,
  timeoutMs = 2000,
}: CodePlaygroundProps) {
  const [result, setResult] = useState<RunResult | null>(null);
  const [running, setRunning] = useState(false);
  const [showingSolution, setShowingSolution] = useState(false);
  const [runId, setRunId] = useState(0);
  const [runShortcut, setRunShortcut] = useState("Ctrl ↵");
  const runningRef = useRef(false);
  const getDocRef = useRef<() => string>(() => initialCode);

  const run = useCallback(async () => {
    if (runningRef.current) return;
    runningRef.current = true;
    setRunning(true);
    try {
      const code = await toJavaScript(getDocRef.current(), language);
      setResult(await runInWorker(code, functionName, tests, timeoutMs));
    } catch (error) {
      setResult({ status: "error", message: error instanceof Error ? error.message : String(error), logs: [] });
    } finally {
      runningRef.current = false;
      setRunning(false);
      setRunId((id) => id + 1);
    }
  }, [language, functionName, tests, timeoutMs]);

  useEffect(() => {
    if (/Mac|iPhone|iPad/.test(navigator.platform)) setRunShortcut("⌘ ↵");
  }, []);

  const editor = useCodeEditor({ initialDoc: initialCode, language, onRun: run });
  getDocRef.current = editor.getDoc;

  const replace = (code: string, solutionShown: boolean) => {
    editor.setDoc(code);
    setShowingSolution(solutionShown);
    setResult(null);
  };

  const passed = result?.status === "done" ? result.tests.filter((test) => test.pass).length : 0;

  return {
    editor,
    result,
    runId,
    running,
    passed,
    hasTests: Boolean(functionName) && tests.length > 0,
    run,
    reset: () => replace(initialCode, false),
    toggleSolution: solution ? () => replace(showingSolution ? initialCode : solution, !showingSolution) : undefined,
    showingSolution,
    runShortcut,
  };
}
