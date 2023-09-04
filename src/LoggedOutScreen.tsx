import React from 'react'

import { initiateAuth } from './resources/auth'

export function LoggedOutScreen() {
  return (
    <div>
      You are not logged in.
      <button onClick={initiateAuth}>Log in</button>
    </div>
  )
}
