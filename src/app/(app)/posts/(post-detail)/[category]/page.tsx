import type { definePrerenderPage } from "@/lib/request.server";
import { redirect } from "next/navigation";

export default definePrerenderPage<{ category: string }>()({
  fetcher({ category }) {
    return Promise.resolve({});;
  },
  Component({ data }) {
    redirect(`/posts${data.path}`)

    return <div>
      正在重定向到 <pre>{`/posts${data.path}`}</pre>
    </div>
  }
})
