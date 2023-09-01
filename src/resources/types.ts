export type SubscriptionItem = {
  kind: 'youtube#subscription'
  etag: string
  id: string
  snippet: {
    publishedAt: string
    title: string
    description: string
    resourceId: {
      kind: 'youtube#channel'
      channelId: string
    }
    channelId: string
    thumbnails: {
      default: {
        url: string
      }
      medium: {
        url: string
      }
      high: {
        url: string
      }
    }
  }
}

export type SubscriptionListResponse = {
  kind: 'youtube#SubscriptionListResponse'
  etag: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: Array<SubscriptionItem>
}
