import { type ReactNode, type FC, useState, useImperativeHandle, forwardRef, type PropsWithChildren, type PropsWithChildren, useMemo } from "react"

export interface PresentSheetProps {
  content: ReactNode | FC
  open?: boolean
  onOpenChange?: (value: boolean) => void
  title?: ReactNode
  zIndex?: number
  dismissible?: boolean
  defaultOpen?: boolean

  triggerAsChild?: boolean
}

export type SheetRef = {
  dismiss: () => void
}

export const PresentSheet = forwardRef<
  SheetRef,
  PropsWithChildren<PresentSheetProps>>
  ((props, ref) => {
    const { content, children, zIndex = 998, dismissible = true, defaultOpen, triggerAsChild } = props;

    const [isOpen, setIsOpen] = useState(props.open ?? defaultOpen);

    useImperativeHandle(ref, () => ({
      dismiss: () => {
        setIsOpen(false)
      }
    }))

    const nextRootProps = useMemo(() => {
      const nextProps = {
        onOpenChange: setIsOpen
      } as any;

      if (isOpen !== undefined) {
        nextProps.open = isOpen
      }

      
    }, [])


  })
