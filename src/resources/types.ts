export interface SubscriptionItem {
  kind: 'youtube#subscription'
  etag: string
  id: string
  snippet: {
    publishedAt: string
    title: string
    description: string
    resourceId: {
      kind: 'youtube#channel' | string
      channelId: string
    }
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

export interface SubscriptionListResponse {
  kind: 'youtube#SubscriptionListResponse'
  etag: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  nextPageToken?: string
  items: Array<SubscriptionItem>
}

export interface ActivitiesListResponse {
  kind: 'youtube#activityListResponse'
  etag: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  nextPageToken?: string
  items: Array<ActivitiesListItem>
}

export interface ActivitiesListItem {
  kind: 'youtube#activity'
  etag: string
  id: string
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
      default: {
        url: string
        width: number
        height: number
      }
      medium: {
        url: string
        width: number
        height: number
      }
      high: {
        url: string
        width: number
        height: number
      }
      standard: {
        url: string
        width: number
        height: number
      }
      maxres: {
        url: string
        width: number
        height: number
      }
    }
    channelTitle: string
    type: 'upload'
  }
  contentDetails: {
    upload: {
      videoId: 'ATAaIYUDQ7E'
    }
  }
}
