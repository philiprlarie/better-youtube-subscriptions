import { SubscriptionListResponse } from './types'

export async function getSubscriptions(accessToken: string): Promise<SubscriptionListResponse> {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&maxResults=100`,
    { method: 'GET', headers: { Authorization: `Bearer ${accessToken}` } },
  )

  const result: SubscriptionListResponse = await response.json()
  return result
}
