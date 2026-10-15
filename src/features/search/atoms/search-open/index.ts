"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { searchOpenAtom } from "./utils";

export const useGetSearchOpen = () => useAtomValue(searchOpenAtom);
export const useSetSearchOpen = () => useSetAtom(searchOpenAtom);
export const useResetSearchOpen = () => useResetAtom(searchOpenAtom);
