'use client';

import { PostMetaBar } from '@/components/modules/post/PostMetaBar';
import { useCurrentPostDataSelector } from '@/providers/post/CurrentPostDataProvider';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

export const PostTitle = () => {
  const title = useCurrentPostDataSelector((data) => data.title);

  return (
    <h1 className='mb-8 text-balance text-center text-4xl font-bold leading-tight'>
      {title}
    </h1>
  );
};

export const PostMetaBarInternal: Component = ({ className }) => {
  const meta = useCurrentPostDataSelector((data) => {
    if (!data) return;
    return {
      created: data.created,
      category: data.category,
      tags: data.tags,
      count: data.count,
      modified: data.modified,
    }

  })

  console.log('meta :', meta);

  if (!meta) return null;
  return <PostMetaBar meta={meta} className={className} />
}

export const SlugReplacer = ({ to }: { to: string }) => {
  const router = useRouter();
  const onceRef = useRef(false);

  if (!onceRef.current) {
    onceRef.current = true;
    router.replace(to);
  }

  return null;
};
