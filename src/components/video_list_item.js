import React from 'react';

const VideoListItem = ({video, selectedVideo, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const activeClassName = (selectedVideo == video) ? "list-group-item list-group-item-success" : "list-group-item";

  return (
    <li className={activeClassName} onClick={ () => onVideoSelect(video) }>
      <div className="media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} alt={video.snippet.title} />
        </div>
        <div className="media-body">
          <h5 className="media-heading">{video.snippet.title}</h5>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
