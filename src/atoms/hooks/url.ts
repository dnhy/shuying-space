import { useAggregationSelector } from "@/providers/root/aggregation-data-provider";
import { useAtomValue } from "jotai";
import { adminUrlAtom } from "../url";
import { useCallback } from "react";
import { getToken } from "@/lib/cookie";

export const useAppUrl = () => {
  const url = useAggregationSelector(a => a.url);
  const adminUrl = useAtomValue(adminUrlAtom)

  return {
    adminUrl,
    ...url
  }
}

export const useResolveAdminUrl = () => {
  const { adminUrl } = useAppUrl();
  return useCallback((path?: string) => {
    if (!adminUrl) return '';
    const parseUrl = new URL(adminUrl.replace(/\/$/, ''));
    const token = getToken();
    if (token) {
      parseUrl.searchParams.set('token', token)
    }

    return `${parseUrl.protocol}//${parseUrl.host}${parseUrl.pathname}${path || ''}${parseUrl.search}`
  }, [adminUrl])
}
