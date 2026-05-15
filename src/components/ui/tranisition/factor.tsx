'use client';

import type {
  HTMLMotionProps,
  MotionProps,
  TargetAndTransition,
  Transition,
} from 'motion/react';
import { motion } from 'motion/react';

import { FC, memo, PropsWithChildren, useState } from 'react';
import { BaseTransitionProps } from './typings';
import { microReboundPreset } from '@/constants/spring';

interface TransitionViewParmas {
  from: TargetAndTransition;
  to: TargetAndTransition;
  initial?: TargetAndTransition;
  preset?: Transition;
}

const isHydrationEnded = false;

export const createTransitionView = (params: TransitionViewParmas) => {
  const { from, to, initial, preset } = params;
  const TransitionView = ({
    ref,
    ...props
  }: PropsWithChildren<BaseTransitionProps> & {
    ref?: React.RefObject<HTMLElement | null>;
  }) => {
    const {
      timeout = {},
      duration = 0.5,
      animation = {},
      as = 'div',
      delay = 0,
      lcpOptimization = false,
      ...rest
    } = props;

    const { enter = delay, exit = delay } = timeout;

    // motion通用组件
    const MotionComponent = motion[as] as FC<
      HTMLMotionProps<any> & { ref?: React.Ref<HTMLElement | null> }
    >;

    const [stableIsHydrationEnded] = useState(isHydrationEnded);

    const motionProps: MotionProps = {
      initial: initial || from,
      animate: {
        ...to,
        transition: {
          duration,
          ...(preset || microReboundPreset),
          ...animation.enter,
          delay: enter / 1000,
        },
      },
      transition: {
        duration,
      },
      exit: {
        ...from,
        transition: {
          duration,
          ...animation.exit,
          delay: exit / 1000,
        } as TargetAndTransition['transition'],
      },
    };
    if (lcpOptimization && !stableIsHydrationEnded) {
      motionProps.initial = to;
      delete motionProps.animate;
    }

    console.log('motionProps :', motionProps);


    return (
      <>
        <MotionComponent ref={ref} {...motionProps} {...rest}>
          {props.children}
        </MotionComponent>
      </>
    );
  };

  TransitionView.displayName = `forwardRef(TransitionView)`;
  const MemoedTrasitionView = memo(TransitionView);
  MemoedTrasitionView.displayName = `MemoedTrasitionView`;
  return MemoedTrasitionView;
};
