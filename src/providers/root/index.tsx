import { ProviderComposer } from '@/components/common/ProviderComposer'
import type { JSX, PropsWithChildren } from 'react'
import { EventProvider } from './event-provider'

const baseContexts: JSX.Element[] = []

const webappContexts = [...baseContexts]

export function WebAppProviders({ children }: PropsWithChildren) {
  return (
    <ProviderComposer contexts={webappContexts}>
      {children}

      <EventProvider key="viewportProvider" />
    </ProviderComposer>
  )
}
