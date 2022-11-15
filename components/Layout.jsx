import React from "react";
import { useParams, Link } from "react-router-dom";
import Types from "./forms2";
import axios from "axios";
import CourseCard from "./CourseCard";
import LayoutHeader from "./LayoutHeader";
import VideoCard from "./VideoCard";
import VideoList from "./VideoList";
export default function Layout() {
  let params = useParams();
  let isChange = false;
  const [formStyle, setFormStyle] = React.useState(
    findArrayElementById(Types.forms, params.formId).form.name
  );
  const [playlistId, setPlaylistId] = React.useState(
    findArrayElementById(Types.forms, params.formId).form.plid
  );
  const [playlist, setPlaylist] = React.useState("Waiting....");
  if (params.formId !== formStyle) {
    isChange = true;
  }
  function findArrayElementById(array, id) {
    return array.find((element) => {
      return element.id === id;
    });
  }
  if (isChange) {
    setFormStyle(findArrayElementById(Types.forms, params.formId).form.name);
  }

  const url = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=AIzaSyBzga6qqPGR14-ThGvj09cKiPJCo0jg-r4`;
  React.useEffect(() => {
    getPlaylist();
  }, []);
  const getPlaylist = () => {
    axios.get(url)
      .then((res) => 
      {
        setPlaylist(res.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  let isFetch = false;
  var Courses = [];
  playlist === "Waiting...." ? (isFetch = false) : (isFetch = true);
  if (isFetch) {
    Courses = playlist.items.map((ele) => {
      return (
        <CourseCard
          courseName={ele.snippet.title}
          courseImg={ele.snippet.thumbnails.medium.url}
          courseDes={ele.snippet.localized.description}
          courseId={ele.id}
        />
      );
    });
  }
  function handleClick() {
    location.reload();
  }
  React.useEffect(() => {
    getPlaylist();
  }, []);
  const formStyles = Types.forms.map((ele) => {
    var route = "/" + ele.id;
    return (
      <div className="tile">
        <button onClick={handleClick} >
          <Link to={route} style={{ color: "black", textDecoration: "none" }}>
            {ele.form.name}
          </Link>
        </button>
      </div>
    );
  });
  return (
    <div>
      <LayoutHeader forms={formStyles}/>
      {Courses}
    </div>
  );
}
