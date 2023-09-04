import { CLIENT_ID, LOCAL_STORAGE_AUTH_RESPONSE_KEY } from './constants'

export type BetterTokenResponse = TokenResponse & { expiresAt: number }

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

export function logOut() {
  localStorage.removeItem(LOCAL_STORAGE_AUTH_RESPONSE_KEY)
  window.location.reload()
}
