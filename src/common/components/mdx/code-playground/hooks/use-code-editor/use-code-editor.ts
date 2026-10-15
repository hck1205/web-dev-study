"use client";

import type { EditorView } from "@codemirror/view";
import { useCallback, useEffect, useRef, useState } from "react";
import { color } from "@/common/design-system";
import type { UseCodeEditorOptions } from "./use-code-editor.type";
import { editorTheme } from "./use-code-editor.utils";

/**
 * CodeMirror 6 에디터를 div에 붙인다. 에디터 코드는 크기가 커서 화면에 붙을 때 불러온다.
 * 불러오기 전에는 view가 같은 코드를 <pre>로 보여 준다.
 */
export function useCodeEditor({ initialDoc, language, onRun }: UseCodeEditorOptions) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const onRunRef = useRef(onRun);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    onRunRef.current = onRun;
  }, [onRun]);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const [{ basicSetup }, { EditorView, keymap }, { Prec }, { javascript }, { HighlightStyle, syntaxHighlighting }, { tags }] =
        await Promise.all([
          import("codemirror"),
          import("@codemirror/view"),
          import("@codemirror/state"),
          import("@codemirror/lang-javascript"),
          import("@codemirror/language"),
          import("@lezer/highlight"),
        ]);
      if (cancelled || !containerRef.current) return;

      const highlight = HighlightStyle.define([
        { tag: [tags.comment], color: color.syntaxComment, fontStyle: "italic" },
        { tag: [tags.keyword, tags.operatorKeyword, tags.controlKeyword], color: color.syntaxKeyword },
        { tag: [tags.string, tags.regexp], color: color.syntaxString },
        { tag: [tags.number, tags.bool, tags.null], color: color.syntaxNumber },
        { tag: [tags.function(tags.variableName), tags.function(tags.propertyName)], color: color.syntaxTitle },
        { tag: [tags.typeName, tags.className], color: color.syntaxType },
      ]);

      viewRef.current = new EditorView({
        doc: initialDoc,
        parent: containerRef.current,
        extensions: [
          basicSetup,
          javascript({ typescript: language === "typescript" }),
          EditorView.lineWrapping,
          EditorView.theme(editorTheme),
          syntaxHighlighting(highlight),
          EditorView.contentAttributes.of({ "aria-label": "코드 편집기" }),
          Prec.highest(keymap.of([{ key: "Mod-Enter", run: () => (onRunRef.current(), true) }])),
        ],
      });
      setReady(true);
    })();

    return () => {
      cancelled = true;
      viewRef.current?.destroy();
      viewRef.current = null;
    };
    // 처음 붙일 때의 코드·언어만 쓴다. 이후 내용 교체는 setDoc으로 한다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDoc = useCallback(() => viewRef.current?.state.doc.toString() ?? initialDoc, [initialDoc]);

  const setDoc = useCallback((text: string) => {
    const view = viewRef.current;
    if (!view) return;
    view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: text } });
  }, []);

  return { containerRef, ready, getDoc, setDoc };
}
