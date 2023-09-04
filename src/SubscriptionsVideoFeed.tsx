import React from 'react'

import { logOut } from './resources/auth'
import { useActivities } from './useActivities'
import { formatTimeAgoWithIntl } from './utils/date'

export function SubscriptionsVideoFeed() {
  const activityQuery = useActivities()

  if (!activityQuery.data) {
    return <div>loading...</div>
  }

  return (
    <div>
      hello0ooo!
      <button onClick={logOut}>Log out</button>
      <div>
        {activityQuery.data.map((item) => (
          <UploadDisplay
            key={item.id}
            title={item.snippet.title}
            publishedAt={item.snippet.publishedAt}
            channelTitle={item.snippet.channelTitle}
            description={item.snippet.description}
            imageUrl={item.snippet.thumbnails.medium.url}
            channelId={item.snippet.channelId}
            videoId={item.contentDetails.upload.videoId}
          />
        ))}
      </div>
    </div>
  )
}

function UploadDisplay({
  title,
  publishedAt,
  channelTitle,
  description,
  imageUrl,
  channelId,
  videoId,
}: {
  title: string
  publishedAt: string
  channelTitle: string
  description: string
  imageUrl: string
  channelId: string
  videoId: string
}) {
  return (
    <div style={{ display: 'flex' }}>
      <img src={imageUrl} style={{ width: 100, height: 100 }} />
      <div>
        <h3>
          <a href={`https://www.youtube.com/watch?v=${videoId}`} target='_blank' rel='noreferrer'>
            {title}
          </a>
        </h3>
        <span>{formatTimeAgoWithIntl(new Date(publishedAt))}</span>
        <h4>
          <a href={`https://www.youtube.com/channel/${channelId}`}>{channelTitle}</a>
        </h4>
        <p>{description}</p>
      </div>
    </div>
  )
}
