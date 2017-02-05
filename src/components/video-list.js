import React from 'react';

import VideoListItem from './video-list-item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return(
      <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video} />
    );
  })
  return (
    <div className="col s12 m4 l4 video-list">
      {videoItems}
    </div>
  );
};

export default VideoList;
