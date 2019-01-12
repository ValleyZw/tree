import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

import { useTitle } from 'utils'

const discussionConfig = {
  shortname: 'docus-valleyease',
  config: {
    url: 'https://valleyease.me',
    identifier: 'docus',
    title: 'Documentaries',
  }
}

function Comment(){
  useTitle('Comment | Valley');
  return(
    <DiscussionEmbed {...discussionConfig}/>
  )
}

export default Comment
