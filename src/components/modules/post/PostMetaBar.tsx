import { MdiClockOutline } from "@/components/icons/clock";
import { FloatPopover } from "@/components/ui/float-popover/FloatPopover";
import { useModalStack } from "@/components/ui/modal/stacked/provider";
import { RelativeTime } from "@/components/ui/relative-time/RelativeTime";
import { useIsClient } from "@/hooks/common/use-is-client";
import { clsxm } from "@/lib/helper";

type PostModel = any;

export const PostMetaBar: Component<{
  meta: Partial<
    Pick<PostModel, 'created' | 'modified' | 'category' | 'tags' | 'count'>
  >;
}> = ({ meta, className, children }) => {
  console.log('meta :', meta);
  const { present } = useModalStack();
  const isClient = useIsClient();
  console.log('isClient :', isClient);

  return <div className={clsxm('flex min-w-0 shrink grow flex-wrap gap-2 text-sm', className)}>
    <div className="flex min-w-0 items-center space-x-1">
      {
        !!meta.created &&
        <>
          <MdiClockOutline />
          <span>
            <RelativeTime date={meta.created} />
          </span>
        </>
      }
      {meta.modified ?
        isClient ?
          <FloatPopover
            mobileAsSheet
            wrapperClassName="text-xs"
            as="span"
            type="tooltip"
            triggerElement="(已编辑)"
            sheet={{
              title: '11111'
            }}
          >
            编辑于 <RelativeTime date={meta.modified} />
          </FloatPopover>
          : <span className="text-xs">(已编辑)</span>
        : null}
    </div>

  </div>
};
