import Link from 'next/link';
import { memo } from 'react';
import { PostItemHoverOverlay } from './PostItemHoverOverlay';
import { PostPinIcon } from './PostPinIcon';
import clsx from 'clsx';
import RemoveMarkdown from 'remove-markdown';

// 文章列表项
export const PostItem = memo<{ data: any }>(function PostItem({ data }) {
  const hasImage = data.images?.length > 0 && data.images[0].src;
  const categorySlug = data.category?.slug;
  const postLink = `/posts/${categorySlug}/${data.slug}`;
  const displayText =
    data.text.length > 300
      ? `${RemoveMarkdown(data.text.slice(0, 300))}...`
      : data.text;
  return (
    <Link
      href={postLink}
      className="relative flex flex-col py-8 focus-visible:shadow-none!"
    >
      <PostItemHoverOverlay />
      <h2 className="relative text-2xl font-medium text-balance wrap-break-word">
        {data.title}

        <PostPinIcon pin={!!data.pin} id={data.id} />
      </h2>
      <div className="relative mt-8 space-y-2">
        {!!data.summaty && (
          <p className="ring-accent/10 mb-4 rounded-md px-4 py-2 text-sm leading-relaxed break-all text-gray-900 ring-1 dark:text-zinc-50">
            摘要：{data.summary}
          </p>
        )}
        <div className="relative overflow-hidden text-justify">
          {hasImage && (
            <div
              className={clsx(
                'float-right mb-2 ml-3 size-22 overflow-hidden rounded-md',
                'bg-cover bg-center bg-no-repeat',
              )}
              style={{ backgroundImage: `url(${hasImage})` }}
            />
          )}
          <p className="leading-loose break-all  dark:text-gray-200/90">
            {displayText}
          </p>
        </div>
      </div>
      <div className="post-meta-bar text-base-content/60 mt-2 flex flex-wrap items-center justify-end gap-4 select-none">
        <span className="text-accent hover:text-accent flex shrink-0 items-center space-x-1 text-right select-none [&>svg]:hover:ml-2">
          <span>阅读全文</span>
          <i className="i-mingcute-arrow-right-line text-lg transition-[margin]" />
        </span>
      </div>
    </Link>
  );
});
