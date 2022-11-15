import React from 'react'
import axios from 'axios'
import VideoCard from './VideoCard'
import { useParams } from 'react-router-dom';
import forms2 from './forms2';
export default function VideoList() {
    let params = useParams();

    const [videoList, setVideoList] = React.useState("Waiting....");
    const form = params.formId;
    const playlistId = findArrayElementById(forms2.forms, form).form.plid;

    const url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=AIzaSyBzga6qqPGR14-ThGvj09cKiPJCo0jg-r4&maxResults=50`;
    function findArrayElementById(array, id) {
        return array.find((element) => {
            return element.id === id;
        });
    }
    React.useEffect(() => {
        getVideoList();
    }, []);
    const getVideoList = () => {
        axios.get(url)
            .then((res) => {
                setVideoList(res.data);
            })
            .catch(error => console.error(`Error: ${error}`));
    }
    console.log(videoList);
    let isFetch = false;
    var videoCards = [];
    (videoList === "Waiting....") ? isFetch = false : isFetch = true;
    if (isFetch) {
        videoCards = videoList.items.map((ele) => {
            return <VideoCard
                videoName={ele.snippet.title}
                videoImg={ele.snippet.thumbnails.standard.url}
                videoId={ele.snippet.resourceId.videoId}
            />
        })
        isFetch = false;
    }
    return (
        <div>{videoCards}</div>
    )
}
