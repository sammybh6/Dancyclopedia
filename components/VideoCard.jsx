import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
export default function VideoCard(props) {
  const loc = useLocation();
  const path = loc.pathname;
  const vid=props.videoId;
  const nav=useNavigate();
  return (
    <div onClick={() => {
          nav((path+'/play'),{state:{video:vid}})}}>
        <h1>{props.videoName}</h1>
        <img src={props.videoImg} alt="videoImg"/>
        <p>{props.videoId}</p>
    </div>
  )
}
