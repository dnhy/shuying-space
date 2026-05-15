import { ScrollArea } from '@/components/ui/scroll-area';

export const RecentActivity = () => {

  return <div className="lg:w-1/2 p-5 flex center">
    <div className='lg:max-w-2xl h-fit'>
      <h2 className="text-2xl leading-loose font-medium lg:ml-14">最近发生的事</h2>
      <ScrollArea
        className="h-100 w-150 rounded-md"
        onWheel={(e) => {
          e.stopPropagation();
        }}
      >
        <ul className="shuying-timeline mt-4 p-3">
          {Array.from({ length: 5 }).map((_, idx) => (
            <li
              className="relative flex flex-col justify-between gap-2"
              key={idx}
            >
              <div className="absolute top-1/2 left-0 flex h-5 w-5 items-center justify-center rounded-full border-2">
                <i className="i-mingcute-comment-line"></i>
              </div>
              <div className="pl-8 space-x-2">
                <span>xxxxxxxxxxx</span>
                <span>在xxxx说:</span>
              </div>
              <div className="pl-8">
                <div className="rounded-md bg-gray-100/20 p-3">nice</div>
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  </div>
}



