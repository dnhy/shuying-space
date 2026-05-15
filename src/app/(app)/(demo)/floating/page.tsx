'use client';

import { arrow, flip, offset, shift, useFloating } from '@floating-ui/react-dom';
import clsx from 'clsx';
import { useEffect, useRef, useState, type ReactNode } from 'react';

const floating = (props: any) => {
  const arrowRef = useRef<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, placement, middlewareData } = useFloating({
    placement: 'top',
    middleware: [offset(10), flip(), shift({ padding: 15 }), arrow({ element: arrowRef })]
  });

  useEffect(() => {
    if (!isOpen) return
    if (arrowRef.current && middlewareData.arrow) {
      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
      }[placement.split('-')[0]];

      const { x: arrowX, y: arrowY } = middlewareData.arrow;
      Object.assign(arrowRef.current.style, {
        left: arrowX != null ? `${arrowX}px` : '',
        top: arrowY != null ? `${arrowY}px` : '',
        right: '',
        bottom: '',
        [staticSide!]: '-4px',
      });
    }
  }, [middlewareData.arrow, placement, isOpen]);

  // 显示/隐藏 tooltip
  const showTooltip = () => {
    setIsOpen(true);
  };

  const hideTooltip = () => {
    setIsOpen(false);
  };

  // 添加事件监听器
  useEffect(() => {
    const buttonElement = refs.reference.current;
    const tooltipElement = refs.floating.current;

    if (!buttonElement) return;

    const events = [
      ['mouseenter', showTooltip],
      ['mouseleave', hideTooltip],
      ['focus', showTooltip],
      ['blur', hideTooltip],
    ] as const;

    events.forEach(([event, listener]) => {
      buttonElement.addEventListener(event, listener);
    });

    return () => {
      events.forEach(([event, listener]) => {
        buttonElement.removeEventListener(event, listener);
      });
    };
  }, [refs.reference]);

  return (
    <>
      <button ref={refs.setReference} style={{ background: 'gray' }} id="button" aria-describedby="tooltip">
        My button
      </button>
      {isOpen && (
        <div ref={refs.setFloating} style={floatingStyles} role="tooltip" className="w-max absolute top-0 left-0 bg-amber-800 text-white font-bold p-1 rounded text-[90%]">
          My tooltip with more content
          <div id="arrow" ref={arrowRef} className="absolute bg-amber-800 w-2 h-2 rotate-45" />
        </div>
      )}
    </>
  );
}

export default floating;
