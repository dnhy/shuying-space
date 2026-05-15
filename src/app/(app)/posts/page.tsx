import { NormalContainer } from '@/components/layout/container/Normal';
import { PostItem } from '@/components/modules/post/PostItem';
import { NothingFound } from '@/components/modules/shared/NothingFound';
import { BottomToUpTransitionView } from '@/components/ui/tranisition/BottomToUpTransitionView';
import { definePrerenderPage } from '@/lib/request.server';
import { data } from './data';

interface Props {
  page?: string;
  size?: string;
  sortBy?: string;
  orderBy?: string;
}

export default definePrerenderPage<Props>()({
  fetcher: (params) => {
    const { page, size, orderBy, sortBy } = params || {};

    const currentPage = page ? Number.parseInt(page) : 1;
    const currentSize = size ? Number.parseInt(size) : 10;

    return Promise.resolve(data);
  },
  Component: (props) => {
    const { params } = props;
    const { data, pagination } = props.data ?? {};
    const { page } = params;

    if (!data?.length) {
      return <NothingFound />;
    }

    return (
      <NormalContainer>
        <ul>
          {data.map((item, index) => {
            return (
              <BottomToUpTransitionView
                lcpOptimization
                key={item.id}
                as="li"
                delay={index * 100}
              >
                <PostItem data={item} />
              </BottomToUpTransitionView>
            );
          })}
        </ul>
      </NormalContainer>
    );
  },
});
