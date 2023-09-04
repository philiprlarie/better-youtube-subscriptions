import {
  ActivitiesListItem,
  ActivitiesListResponse,
  SubscriptionItem,
  SubscriptionListResponse,
} from './types'
import { dateFromNumberOfDaysAgo } from '../utils/date'

export async function getSubscriptions(accessToken: string): Promise<SubscriptionItem[]> {
  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&maxResults=50`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      },
    },
  )

  const responseData: SubscriptionListResponse = await response.json()

  // ensure that only channel subscriptions are returned
  const results: SubscriptionItem[] = responseData.items.filter((subscription) => {
    return subscription.snippet.resourceId.kind === 'youtube#channel'
  })

  return results
}

export async function getActivities({
  accessToken,
  channelId,
  publishedAfter: publishedAfterArg,
}: {
  accessToken: string
  channelId: string
  publishedAfter?: string
}): Promise<ActivitiesListItem[]> {
  const publishedAfter = publishedAfterArg ?? dateFromNumberOfDaysAgo(30)

  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&maxResults=50&publishedAfter=${publishedAfter}&channelId=${channelId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      },
    },
  )

  const responseData: ActivitiesListResponse = await response.json()

  // ensure that only video upload activities are returned
  const results: ActivitiesListItem[] = responseData.items.filter((activity) => {
    return activity.snippet.type === 'upload'
  })

  return results
}
