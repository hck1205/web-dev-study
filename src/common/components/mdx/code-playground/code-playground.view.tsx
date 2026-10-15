"use client";

import { Button, ResultMark } from "@/common/design-system";
import { VizFrame } from "../viz-frame";
import { useCodePlayground } from "./code-playground";
import {
  Console,
  EditorBox,
  ErrorBox,
  Fallback,
  LangLabel,
  Results,
  Row,
  RowDetail,
  RowLabel,
  Shortcut,
  Summary,
  SummaryBar,
  Toolbar,
  ToolbarEnd,
} from "./code-playground.styled";
import type { CodePlaygroundProps } from "./code-playground.type";
import { formatMs } from "./code-playground.utils";

/** 글 안에서 코드를 고쳐 바로 실행하고, 테스트 결과와 console 출력을 본다. */
export function CodePlayground(props: CodePlaygroundProps) {
  const { initialCode, language = "javascript", caption } = props;
  const pg = useCodePlayground(props);
  const { result } = pg;

  return (
    <VizFrame caption={caption}>
      <Toolbar>
        <LangLabel>{language === "typescript" ? "TypeScript" : "JavaScript"}</LangLabel>
        <ToolbarEnd>
          {pg.toggleSolution && (
            <Button variant="ghost" onClick={pg.toggleSolution}>
              {pg.showingSolution ? "내 코드로" : "풀이 보기"}
            </Button>
          )}
          <Button variant="ghost" onClick={pg.reset}>
            처음 코드로
          </Button>
          <Button onClick={pg.run} disabled={pg.running}>
            {pg.running ? "실행 중" : "실행"}
            <Shortcut>{pg.runShortcut}</Shortcut>
          </Button>
        </ToolbarEnd>
      </Toolbar>

      <EditorBox ref={pg.editor.containerRef} data-ready={pg.editor.ready}>
        {!pg.editor.ready && <Fallback>{initialCode}</Fallback>}
      </EditorBox>

      {result && (
        <Results key={pg.runId} aria-live="polite">
          {result.status === "timeout" && (
            <ErrorBox>
              {props.timeoutMs ?? 2000}ms 안에 끝나지 않아 실행을 멈췄다. 무한 루프나 너무 큰 반복이 없는지 확인해 보자.
            </ErrorBox>
          )}
          {result.status === "error" && <ErrorBox>{result.message}</ErrorBox>}
          {result.status === "done" && pg.hasTests && (
            <>
              <Summary allPass={pg.passed === result.tests.length}>
                <strong>
                  테스트 {pg.passed} / {result.tests.length} 통과
                </strong>
                <span>{formatMs(result.ms)}</span>
                <SummaryBar
                  allPass={pg.passed === result.tests.length}
                  style={{ transform: `scaleX(${pg.passed / result.tests.length})` }}
                />
              </Summary>
              <ol>
                {result.tests.map((test, i) => (
                  <Row key={i} style={{ animationDelay: `${120 + i * 70}ms` }}>
                    <ResultMark pass={test.pass} label={test.pass ? "통과" : "실패"} size="sm" />
                    <div>
                      <RowLabel>{test.label}</RowLabel>
                      {test.pass ? (
                        <RowDetail>
                          → {test.actual} <span>{formatMs(test.ms)}</span>
                        </RowDetail>
                      ) : (
                        <>
                          <RowDetail>기대값 {test.expected}</RowDetail>
                          <RowDetail fail>{test.error ? test.error : `실제값 ${test.actual}`}</RowDetail>
                        </>
                      )}
                    </div>
                  </Row>
                ))}
              </ol>
            </>
          )}
          {result.status === "done" && !pg.hasTests && result.logs.length === 0 && (
            <Console as="p">출력 없음 ({formatMs(result.ms)})</Console>
          )}
          {result.logs.length > 0 && (
            <Console>
              {result.logs.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </Console>
          )}
        </Results>
      )}
    </VizFrame>
  );
}
