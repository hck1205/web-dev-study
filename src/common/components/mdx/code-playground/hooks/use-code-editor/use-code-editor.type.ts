import type { PlaygroundLanguage } from "../../code-playground.type";

export interface UseCodeEditorOptions {
  initialDoc: string;
  language: PlaygroundLanguage;
  /** Ctrl/⌘ + Enter */
  onRun: () => void;
}
