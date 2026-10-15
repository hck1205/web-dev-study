import { color, font, radius } from "@/common/design-system";

/** 디자인 토큰(CSS 변수)으로 만든 에디터 테마. 라이트/다크가 자동으로 따라간다. */
export const editorTheme = {
  "&": { fontSize: "inherit", backgroundColor: color.codeBg, color: color.text, borderRadius: radius.md },
  "&.cm-focused": { outline: "none" },
  ".cm-scroller": { fontFamily: font.mono, lineHeight: "1.6" },
  ".cm-content": { padding: "0.75rem 0", caretColor: color.accent },
  ".cm-gutters": { backgroundColor: color.codeBg, color: color.textSubtle, border: "none", paddingLeft: "0.25rem" },
  ".cm-activeLine": { backgroundColor: "transparent" },
  "&.cm-focused .cm-activeLine": { backgroundColor: color.surfaceHover },
  ".cm-activeLineGutter": { backgroundColor: "transparent", color: color.text },
  ".cm-cursor": { borderLeftColor: color.accent, borderLeftWidth: "2px" },
  "&.cm-focused .cm-selectionBackground, .cm-selectionBackground, ::selection": { backgroundColor: color.accentSoft },
  ".cm-matchingBracket": { backgroundColor: color.accentSoft, outline: `1px solid ${color.accent}` },
  ".cm-tooltip": { backgroundColor: color.surface, border: `1px solid ${color.border}`, borderRadius: radius.sm },
  ".cm-tooltip-autocomplete ul li[aria-selected]": { backgroundColor: color.accentSoft, color: color.text },
};
