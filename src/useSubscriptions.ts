import { useQuery } from '@tanstack/react-query'

import { getSubscriptions } from './resources/youtube'
import { useAuth } from './useAuth'
import { MILLISECONDS_IN_MINUTE } from './utils/date'

const SUBSCRIPTIONS_QUERY = 'SUBSCRIPTIONS_QUERY'

export function useSubscriptions() {
  const { accessToken } = useAuth()

  const subscriptionsQuery = useQuery(
    [SUBSCRIPTIONS_QUERY],
    async () => {
      return getSubscriptions(accessToken!)
    },
    {
      enabled: !!accessToken,
      cacheTime: MILLISECONDS_IN_MINUTE * 10,
      staleTime: MILLISECONDS_IN_MINUTE * 10,
    },
  )

  return subscriptionsQuery
}
