import React from "react";
import YoutubeEmbed from "../YoutubeEmbed";

function Video(){
    return(
        <div className='video'>
            <div className='video-text'>
                How to use SubNub?
            </div>
            <div className='video-container'>
                <YoutubeEmbed embedId={"aqz-KE-bpKQ"} />
            </div>
        </div>
    )
}


export default Video
