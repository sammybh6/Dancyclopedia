import React from 'react'
import CourseCard from '../components/CourseCard'
import axios from 'axios'

const KEY="AIzaSyBzga6qqPGR14-ThGvj09cKiPJCo0jg-r4"
export default function Course() {
    const [playlist, setPlaylist]=React.useState("Waiting....");
    const url="https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PLCt36-edE8ZAo2ituccnDskAmDCnvrdt6&key=AIzaSyBzga6qqPGR14-ThGvj09cKiPJCo0jg-r4";

    React.useEffect(()=> {
        getPlaylist();
    },[]);
    const getPlaylist=()=>{
        axios.get(url)
        .then((res) => {
            setPlaylist(res.data);
        })
        .catch(error => console.error(`Error: ${error}`));
    }
    let isFetch=false;
    var Courses=[];
    (playlist==="Waiting....")?isFetch=false:isFetch=true;
    if(isFetch)
    {
        Courses=playlist.items.map( (ele) => {
            return  <CourseCard
                            courseName={ele.snippet.title}
                            courseImg={ele.snippet.thumbnails.high.url}
                        />
        })
        isFetch=false;
    }

    return (
        <div>
            {Courses}
        </div>
        
    )
}
