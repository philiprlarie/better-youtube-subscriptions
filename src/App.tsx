import React from 'react'

import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { LoggedOutScreen } from './LoggedOutScreen'
import { SubscriptionsVideoFeed } from './SubscriptionsVideoFeed'
import { useAuth } from './useAuth'

const queryClient = new QueryClient()

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <QueryClientProvider client={queryClient}>
      {isLoggedIn ? <SubscriptionsVideoFeed /> : <LoggedOutScreen />}
    </QueryClientProvider>
  )
}

export default App
