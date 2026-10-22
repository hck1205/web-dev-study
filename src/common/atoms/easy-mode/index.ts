"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { easyModeAtom } from "./utils";

export type { EasyMode } from "./types";

export const useGetEasyMode = () => useAtomValue(easyModeAtom);
export const useSetEasyMode = () => useSetAtom(easyModeAtom);
export const useResetEasyMode = () => useResetAtom(easyModeAtom);
