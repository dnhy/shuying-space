import {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useId,
  useRef,
} from 'react';
import { ModalProps } from './types';
import { jotaiStore } from '@/lib/store';
import { modalIdToPropsMap, modalStackAtom } from './context';
import { useAtomValue } from 'jotai';
import { usePathname } from 'next/navigation';
import { useIsMobile } from '@/atoms/hooks';
import { AnimatePresence } from 'motion/react';

interface ModalStackOptions {
  wrapper?: FC;
}

const actions = {
  dismiss(id: string) {
    jotaiStore.set(modalStackAtom, (p) => p.filter((item) => item.id !== id));
  },
  dismissTop() {
    jotaiStore.set(modalStackAtom, (p) => p.slice(0, -1));
  },
  dismissAll() {
    jotaiStore.set(modalStackAtom, []);
  },
};

const useDismissAllWhenRouterChange = () => {
  const pathName = usePathname();
  useEffect(() => {
    actions.dismissAll();
  }, [pathName]);
};

export const useModalStack = (options?: ModalStackOptions) => {
  const id = useId();
  const currentCount = useRef(0);
  const { wrapper } = options || {};

  return {
    present: useCallback(
      (props: ModalProps & { id?: string }) => {
        const fallbackModelId = `${id}-${++currentCount.current}`;
        const modalId = props.id ?? fallbackModelId;

        const currentStack = jotaiStore.get(modalStackAtom);

        const exsitingModal = currentStack.find((item) => item.id === modalId);

        if (exsitingModal) {
          jotaiStore.set(modalStackAtom, (p) => {
            const index = p.indexOf(exsitingModal);
            return [...p.slice(0, index), ...p.slice(index + 1), exsitingModal];
          });
        } else {
          jotaiStore.set(modalStackAtom, (p) => {
            const modalProps = {
              ...props,
              id: modalId,
              wrapper,
            };

            modalIdToPropsMap[modalProps.id] = modalProps;

            return p.concat(modalProps);
          });
        }

        return () => {
          jotaiStore.set(modalStackAtom, (p) =>
            p.filter((item) => item.id !== modalId),
          );
        };
      },
      [id, wrapper],
    ),

    ...actions,
  };
};

const ModalStack = () => {
  const stack = useAtomValue(modalStackAtom);

  useDismissAllWhenRouterChange();

  const forceOverlay = stack.some((item) => item.overlay);

  const isMobile = useIsMobile();

  return (
    <AnimatePresence mode="popLayout">
      {stack.map((item, index) => (
        <ModalInternal
          key={item.id}
          item={item}
          index={index}
          isTop={index === stack.length - 1}
        />
      ))}
    </AnimatePresence>
  );
};

export const modalStakProvider: FC<PropsWithChildren> = ({ children }) => (
  <>
    {children}
    <ModalStack />
  </>
);
