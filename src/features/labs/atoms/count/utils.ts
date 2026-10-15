import { atomWithReset } from "jotai/utils";
import type { CountValue } from "./types";

export const INITIAL_COUNT: CountValue = 0;

export const countAtom = atomWithReset<CountValue>(INITIAL_COUNT);
