import React from 'react';

const VideoList = (props) => {
  // const videos = props.videos;
  return (
    <ul class="no-gutter">
      { props.videos.length }
    </ul>
  )
}

export default VideoList;
