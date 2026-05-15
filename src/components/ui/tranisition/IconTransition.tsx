import { useAnimationControls } from 'motion/react';
import { JSX, useEffect, useState } from 'react';
import { FadeInOutTransitionView } from './FadeInOutTransitionView';

interface IconTransitionProps {
  solidIcon: JSX.Element;
  regularIcon: JSX.Element;
  currentState: 'solid' | 'regular';
}

// 带有淡入淡出动画效果的图标
export const IconTransition: React.FC<IconTransitionProps> = (props) => {
  const { currentState, regularIcon, solidIcon } = props;

  const map = {
    solid: solidIcon,
    regular: regularIcon,
  };

  const [currentIcon, setCurrentIcon] = useState(map[currentState]);
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({ opacity: 0.001}).then(() => {
      setCurrentIcon(map[currentState]);

      requestAnimationFrame(() => {
        controls.start({ opacity: 1});
      });
    });
  }, [currentState]);

  return (
    <FadeInOutTransitionView
      initial
      animate={controls}
      transition={{ duration: 0.2 }}
    >
      {currentIcon}
    </FadeInOutTransitionView>
  );
};
