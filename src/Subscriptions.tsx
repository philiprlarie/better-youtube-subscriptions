import React from 'react'

import { useSubscriptions } from './useSubscriptions'

function Subscriptions() {
  const subscriptionsQuery = useSubscriptions()

  if (!subscriptionsQuery.data) {
    return <div>loading...</div>
  }

  return (
    <div>
      {subscriptionsQuery.data.map((item) => (
        <SubscriptionDisplay
          key={item.id}
          title={item.snippet.title}
          description={item.snippet.description}
          imageUrl={item.snippet.thumbnails.medium.url}
          channelId={item.snippet.resourceId.channelId}
        />
      ))}
    </div>
  )
}

function SubscriptionDisplay({
  title,
  description,
  imageUrl,
  channelId,
}: {
  title: string
  description: string
  imageUrl: string
  channelId: string
}) {
  return (
    <div style={{ display: 'flex' }}>
      <img src={imageUrl} style={{ width: 100, height: 100 }} />
      <div>
        <h2>
          <a href={`https://www.youtube.com/channel/${channelId}`}>{title}</a>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Subscriptions
