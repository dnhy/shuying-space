import { definePrerenderPage } from "@/lib/request.server";
import { getData, type PageParams } from "./api";
import { CurrentPostDataProvider } from "@/providers/post/CurrentPostDataProvider";
import { PostMetaBarInternal, PostTitle, SlugReplacer } from "./pageExtra";
import { BottomToUpTransitionView } from "@/components/ui/tranisition";
import type { ModelWithLiked, PostModel } from "./type";
import { mockPostWithLiked } from "./mockData";
import { GotoAdminEditingButton } from "@/components/modules/shared/GotoAdminEditingButton";

const PostPage = ({ data }: { data: ModelWithLiked<PostModel> }) => {
  const { id } = data
  return <div className="relative w-full min-w-0">
    {/* <AckRead id={id} type="post" />      
    <HeaderMetaInfoSetting />
    */}
    <div>
      <div className="mb-8">
        <PostTitle />
        <GotoAdminEditingButton id={id} type="posts" className="absolute top-1 right-2" />

        <PostMetaBarInternal className="mb-8 justify-center" />
      </div>
    </div>
  </div>

}

export default definePrerenderPage<PageParams>()({
  fetcher(params) {
    return getData(params);
  },
  Component: (props) => {
    const { data, params } = props;
    const fullPath = `/posts/${data?.category?.slug}/${data?.slug}`;
    const currentPath = `/posts/${params.category}/${params.slug}`;

    return <>
      {/* {currentPath !== fullPath && <SlugReplacer to={fullPath} />} */}

      <CurrentPostDataProvider data={data} />
      <div className="relative flex min-h-[120px] grid-cols-[auto,200px] lg:grid">
        <BottomToUpTransitionView className="min-w-0">
          <PostPage data={data} />
        </BottomToUpTransitionView>
      </div>
    </>
  }

})
