import { useQuery } from '@tanstack/react-query'

import { getActivities } from './resources/youtube'
import { useAuth } from './useAuth'
import { useSubscriptions } from './useSubscriptions'
import { MILLISECONDS_IN_MINUTE } from './utils/date'

const ACTIVITIES_QUERY = 'ACTIVITIES_QUERY'

export function useActivities() {
  const { accessToken } = useAuth()

  const { data: subscriptions = [] } = useSubscriptions()
  const allChannelIds: string[] = subscriptions.map((subscription) => {
    return subscription.snippet.resourceId.channelId
  })

  const activitiesQuery = useQuery(
    [ACTIVITIES_QUERY, JSON.stringify(allChannelIds.sort())],
    async () => {
      const allActivitiesRequests = allChannelIds.map((channelId) => {
        return getActivities({
          accessToken: accessToken!,
          channelId,
        })
      })
      const responses = await Promise.all(allActivitiesRequests)

      // sorted reverse chronological, newest first
      const allActivites = responses.flat().sort((activity1, activity2) => {
        if (activity1.snippet.publishedAt === activity2.snippet.publishedAt) return 0
        if (activity1.snippet.publishedAt > activity2.snippet.publishedAt) return -1
        return 1
      })
      console.log('allActivites')
      console.log(allActivites)
      return allActivites
    },
    {
      enabled: !!accessToken && allChannelIds.length > 0,
      cacheTime: MILLISECONDS_IN_MINUTE * 10,
      staleTime: MILLISECONDS_IN_MINUTE * 10,
    },
  )

  return activitiesQuery
}
