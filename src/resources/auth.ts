import { useLocalStorage } from 'react-use'

import { CLIENT_ID, LOCAL_STORAGE_AUTH_RESPONSE_KEY } from './constants'

type BetterTokenResponse = TokenResponse & { expiresAt: number }

const client = google.accounts.oauth2.initTokenClient({
  client_id: CLIENT_ID,
  scope: 'https://www.googleapis.com/auth/youtube.readonly',
  callback: (tokenResponse) => {
    const now = new Date()

    localStorage.setItem(
      LOCAL_STORAGE_AUTH_RESPONSE_KEY,
      JSON.stringify({
        ...tokenResponse,
        expiresAt: now.valueOf() + tokenResponse.expires_in * 1000,
      }),
    )

    window.location.reload()
  },
})

export function initiateAuth() {
  client.requestAccessToken()
}

export function useAuth(): { isLoggedIn: boolean; accessToken?: string } {
  const [tokenResponse] = useLocalStorage<BetterTokenResponse>(LOCAL_STORAGE_AUTH_RESPONSE_KEY)
  const now = new Date()

  return {
    isLoggedIn: !!tokenResponse && tokenResponse.expiresAt > now.valueOf(),
    accessToken: tokenResponse?.access_token,
  }
}
