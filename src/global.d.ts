export {}

declare global {
  const google: {
    accounts: {
      oauth2: {
        initTokenClient: (initTokenClientArgs: {
          client_id: string
          scope: string
          callback: (tokenResponse: TokenResponse) => void
        }) => {
          requestAccessToken: () => void
        }
      }
    }
  }

  interface TokenResponse {
    access_token: string
    expires_in: number
    scope: string
    token_type: 'Bearer'
  }
}
