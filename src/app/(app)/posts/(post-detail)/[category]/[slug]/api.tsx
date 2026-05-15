import { getQueryClient } from "@/lib/query-client.server";
import { requestErrorHandler } from "@/lib/request.server";
import { cache } from "react";
import { mockPostWithLiked } from "./mockData";

export interface PageParams {
  category: string
  slug: string
}

export const getData = cache(async (params: PageParams) => {
  const { category, slug } = params;

  // const data = await getQueryClient()
  //   .fetchQuery({}).catch(requestErrorHandler)

  // return data;
  return mockPostWithLiked;

})
