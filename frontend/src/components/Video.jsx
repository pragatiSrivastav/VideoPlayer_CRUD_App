import React, { useEffect, useState } from "react";
import List from "./List";
import axios from "axios";

// const videos = [
//   { _id: "1", title: "title 1", url: "url 1", description: "description 1" },
//   { _id: "2", title: "title2", url: "url2", description: "description2" },
//   { _id: "3", title: "title3", url: "url3", description: "description3" },
//   { _id: "4", title: "title4", url: "url4", description: "description4" },
// ];

const Video = (props) => {
  const [playList, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/videos")
      .then((res) => {
        // console.log(res);
        setVideos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div>
      {playList.map((video) => {
        return <List key={video._id} video={video} onClick={props.onClick} />;
      })}
    </div>
  );
};

export default Video;
