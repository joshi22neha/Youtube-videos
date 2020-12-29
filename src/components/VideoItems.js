import './VideoItems.css'
import React from 'react';

const VideoItems = ({ video, onVideoSelect}) => {
    return(
        <div onClick={()=>{onVideoSelect(video)}} className='video-item item'>
            <img alt={video.snippet.ttitle} className='ui image' src={video.snippet.thumbnails.medium.url} />
            <div className='content'>
                <div className='header'>{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItems;