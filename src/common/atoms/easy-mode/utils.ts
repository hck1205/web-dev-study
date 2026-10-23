import { atomWithStorage } from "jotai/utils";
import type { EasyMode } from "./types";

/** 이 브라우저의 localStorage에만 저장된다. */
export const EASY_MODE_STORAGE_KEY = "easy-mode";

export const easyModeAtom = atomWithStorage<EasyMode>(EASY_MODE_STORAGE_KEY, false);
