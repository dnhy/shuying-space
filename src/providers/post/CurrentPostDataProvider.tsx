'use client'

import { createModelDataProvider } from 'jojoo/react'

// import { isClientSide, isDev } from '~/lib/env'

const {
  ModelDataProvider,
  ModelDataAtomProvider,
  getGlobalModelData,
  setGlobalModelData,
  useModelDataSelector,
} = createModelDataProvider<any>()

declare global {
  interface Window {
    getModelPostData: typeof getGlobalModelData
  }
}
// if (isDev && isClientSide) window.getModelPostData = getGlobalModelData

export {
  ModelDataAtomProvider as CurrentPostDataAtomProvider,
  ModelDataProvider as CurrentPostDataProvider,
  getGlobalModelData as getGlobalCurrentPostData,
  setGlobalModelData as setGlobalCurrentPostData,
  useModelDataSelector as useCurrentPostDataSelector,
}
