"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { countAtom } from "./utils";

export type { CountValue } from "./types";

export const useGetCount = () => useAtomValue(countAtom);
export const useSetCount = () => useSetAtom(countAtom);
export const useResetCount = () => useResetAtom(countAtom);
