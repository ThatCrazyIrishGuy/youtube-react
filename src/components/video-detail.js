import React from 'react';

import Preloader from './preloader';

const VideoDetail = ({video}) => {
  if(!video) {
    return (
    <div className="col s12 m8 video-detail">
      <Preloader />
    </div>
    );
  }

  const videoTitle = video.snippet.title;
  const videoDescription = video.snippet.description;
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div className="video-detail col s12 m8 l8">
      <div className="video-container">
        <iframe className="embed-responsive-item" src={url} allowFullScreen frameBorder="0"></iframe>
      </div>
      <div className="details card hoverable">
        <div className="card-content">
          <span className="card-title">{videoTitle}</span>
          <p>{videoDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
