import React from 'react';
import "./VideoCard.css";

function VideoCard({image,title,channel,views,channelImage,timeStamp}) {
  return (
    <div className="VideoCard">
        <img class='VideoCard__thumbnail' src={image}/>
        <div className='VideoCard__info'>
            <img className='Channel__profile' src={channelImage}/>
            <div className='Video__text'>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>{views} . {timeStamp}</p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard
