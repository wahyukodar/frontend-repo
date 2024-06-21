"use client"

import { Provider } from 'react-redux'
import store from './store'

type ProvidersProps = {
  children: React.ReactNode
}

export function Providers({ children }: Readonly<ProvidersProps>) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}