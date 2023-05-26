import React from "react"
import ReactPlayer from "react-player"
import videosSource from '../assets/videos/homepagevideos'


const videos = [

]



const VideoPlayer = () => {
    return(
        <div>
        <ReactPlayer url={videosSource} controls />
      </div>
    )

}

export default VideoPlayer;