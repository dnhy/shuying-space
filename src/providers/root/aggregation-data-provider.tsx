'use client'

import { atom, useAtomValue } from "jotai";
import { selectAtom } from "jotai/utils";
import { useCallback } from "react";

type AggregateRoot = any;

export const agggregationDataAtom = atom<null | AggregateRoot>(null);

export const useAggregationSelector = <T,>(selector: (atomValue: AggregateRoot) => T, deps: any[] = []): T | null =>
  useAtomValue(
    selectAtom(
      agggregationDataAtom,
      useCallback(
        (atomValue) => (!atomValue ? null : selector(atomValue)),
        // eslint-disable-next-line react-hooks/use-memo
        deps,
      )
    )
  )
