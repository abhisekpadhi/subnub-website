import React from "react";
import Intro from "./screens/Intro";
import Features from "./screens/Features";
import Video from "./screens/Video";
import Experience from "./screens/Experience";


function Main(){
    return(
        <div className='main-page'>
            <div className='intro-container'>
                <Intro />
            </div>
            <div>
                <Features />
            </div>
            <div>
                <Video />
            </div>
            <div>
                <Experience />
            </div>
        </div>
    )
}


export default Main