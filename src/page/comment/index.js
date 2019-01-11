import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

const discussionConfig = {
  shortname: 'docus-valleyease',
  config: {
    url: 'https://valleyease.me',
    identifier: 'docus',
    title: 'Documentaries',
  }
}

const Comment = () => <DiscussionEmbed {...discussionConfig}/>

export default Comment
