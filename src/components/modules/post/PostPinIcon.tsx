'use client';

import { useState } from 'react';
import { PinIconToggle } from '../shared/PinIconToggle';

// 置顶图标
export const PostPinIcon = ({ pin, id }: { pin: boolean; id: string }) => {
  const [pinState, setPinState] = useState(pin);
  return (
    <PinIconToggle
      onPinChange={(nextPin) => {
        setPinState(nextPin);
      }}
      pin={pinState}
    />
  );
};
