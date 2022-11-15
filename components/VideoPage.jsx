import React from 'react'
import ReactPlayer from 'react-player'
import YoutubeEmbed from './YouTubeEmbed'
import { useLocation } from 'react-router-dom'
import YouTube from 'react-youtube'
export default function videoPage(props) {
  const loc = useLocation();
  const vid = loc.state.video;
  const embed=vid;
  
  return (
    <div>
      <YouTube videoId={embed}/>
      <button>Play</button>
    </div>

  )
}
