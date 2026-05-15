import type { UseFloatingOptions } from '@floating-ui/react-dom'
import type { FC, PropsWithChildren, ReactElement } from 'react'
import { createElement } from 'react'

import { useIsMobile } from '@/atoms/hooks'
import { PresentSheet } from '@/components/sheet'

import type { PresentSheetProps } from '../Sheet/Sheet'

type FloatPopoverProps<T> = PropsWithChildren<{
  triggerElement?: string | ReactElement
  TriggerComponent?: FC<T>

  headless?: boolean
  wrapperClassName?: string
  trigger?: 'click' | 'hover' | 'both'
  padding?: number
  offset?: number
  popoverWrapperClassNames?: string
  popoverClassNames?: string

  triggerComponentProps?: T
  /**
   * 不消失
   */
  debug?: boolean

  animate?: boolean

  as?: keyof HTMLElementTagNameMap

  /**
   * @default popover
   */
  type?: 'tooltip' | 'popover'
  isDisabled?: boolean

  to?: HTMLElement

  onOpen?: () => void
  onClose?: () => void

  asChild?: boolean
}> &
  UseFloatingOptions

export const FloatPopover = <T extends {}>(
  props: FloatPopoverProps<T> & {
    mobileAsSheet?: boolean
    sheet?: Partial<Omit<PresentSheetProps, 'content'>>
  },
) => {
  const isMobile = useIsMobile()
  console.log('isMobile :', isMobile)

  if (isMobile && props.mobileAsSheet) {
    const { triggerElement, TriggerComponent, triggerComponentProps } = props

    const Child = triggerElement
      ? triggerElement
      : TriggerComponent
        ? createElement(TriggerComponent, triggerComponentProps)
        : null
    console.log('props.sheet :', props.sheet)

    return (
      <PresentSheet content={props.children} {...props.sheet}>
        {Child}
      </PresentSheet>
    )
  }
}
