import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.medium.url;
  const videoTitle = video.snippet.title;
  const channelTitle = video.snippet.channelTitle;

  return (
    <div onClick={() => onVideoSelect(video)}className="card horizontal hoverable">
      <div className="card-image">
        <img src={imageUrl} />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <h6>{videoTitle}</h6><br />
          <p>{channelTitle}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoListItem;
