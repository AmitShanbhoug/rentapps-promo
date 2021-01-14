import React from 'react';
import ReactPlayer from 'react-player';
import './Video.css';

function Video() {
    return (
        <div className="video-video">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="video-title" id="/">Renting Simplified</div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=3JxPII7hEM0"
                controls={true}
                width={900*0.75}
                height={600*0.75}
            />
        </div>
    )
}

export default Video
