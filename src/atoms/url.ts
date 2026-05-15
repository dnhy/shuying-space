import { jotaiStore } from "@/lib/store";
import { atom } from "jotai";

export const adminUrlAtom = atom<string | null>(null);

export const fetchAppUrl = () => {
  jotaiStore.set(adminUrlAtom, 'https://test.com');
}

// 暂时立即调用一次
fetchAppUrl()
