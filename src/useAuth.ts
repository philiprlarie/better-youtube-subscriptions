import { useLocalStorage } from 'react-use'

import { BetterTokenResponse } from './resources/auth'
import { LOCAL_STORAGE_AUTH_RESPONSE_KEY } from './resources/constants'

export function useAuth(): { isLoggedIn: boolean; accessToken?: string } {
  const [tokenResponse] = useLocalStorage<BetterTokenResponse>(LOCAL_STORAGE_AUTH_RESPONSE_KEY)
  const now = new Date()

  return {
    isLoggedIn: !!tokenResponse && tokenResponse.expiresAt > now.valueOf(),
    accessToken: tokenResponse?.access_token,
  }
}
