'use client';

import { createTransitionView } from './factor';

// 工厂函数创建过渡动画的组件
export const FadeInOutTransitionView = createTransitionView({
  from: {
    opacity: 0.001,
  },
  to: {
    opacity: 1,
  },
});
