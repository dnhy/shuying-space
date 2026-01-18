import { Divider } from "@/components/ui/divider";
import Link from "next/link";
import { Fragment } from "react/jsx-runtime";

export const RecentArticleGroups = () => {
  return (
    <>
      <div className='lg:w-1/2 w-full flex center'>
        <section className="flex max-w-full lg:max-w-2xl w-full flex-col gap-4 px-4">
          <h2 className="text-2xl leading-loose font-medium">最近更新的文稿</h2>
          <ul className="shuying-timeline mt-4">
            {Array.from({ length: 5 }).map((_, idx) => (
              <li className="flex justify-between" key={idx}>
                <Link prefetch href={'1111'}>
                  {idx + 1}
                </Link>

                <span className="ml-2 shrink-0 self-end text-xs opacity-70">
                  <RelativeTime />
                </span>
              </li>
            ))}
          </ul>
          <Link
            href=""
            className="hover:text-accent flex items-center justify-end"
          >
            <i className="i-mingcute-arrow-right-circle-line" />
            <span className="ml-2">还有更多</span>
          </Link>

          <Divider />
          <h2 className="text-2xl leading-loose font-medium">最近更新的手记</h2>
          <ul className="shuying-timeline mt-4">
            {Array.from({ length: 5 }).map((_, idx) => (
              <li className="flex justify-between" key={idx}>
                <Link prefetch href={'1111'}>
                  {idx + 1}
                </Link>

                <span className="ml-2 shrink-0 self-end text-xs opacity-70">
                  <RelativeTime />
                </span>
              </li>
            ))}
          </ul>
          <Link
            href=""
            className="hover:text-accent flex items-center justify-end"
          >
            <i className="i-mingcute-arrow-right-circle-line" />
            <span className="ml-2">还有更多</span>
          </Link>
        </section>
      </div>
    </>
  );
};



const RelativeTime = (params) => {
  return <Fragment>3 days</Fragment>;
};

