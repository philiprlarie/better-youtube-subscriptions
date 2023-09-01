import React from 'react'

import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Subscriptions from './Subscriptions'
import { useAuth, initiateAuth } from './resources/auth'

const queryClient = new QueryClient()

function App() {
  const { isLoggedIn } = useAuth()

  if (isLoggedIn) {
    return (
      <QueryClientProvider client={queryClient}>
        <div>
          hello
          <Subscriptions />
        </div>
      </QueryClientProvider>
    )
  } else {
    return (
      <div>
        You are not logged in.
        <button onClick={initiateAuth}>Log in</button>
      </div>
    )
  }
}

export default App
