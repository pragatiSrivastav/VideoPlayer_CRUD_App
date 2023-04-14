import React, { useState } from "react";
import VideoDetailCopy from "./VideoDetailCopy";
import VideoList from "./VideoList";
import "./videoCenter.scss";
import Form from "./Form";

const VideoCenter = () => {
  const [detail, setDetail] = useState();
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = (inputBool) => {
    console.log("Handle show from video center working");

    setShowForm(inputBool);
    console.log(showForm);
  };

  const onClickHandler = (video) => {
    console.log(video);
    setDetail(video);
  };

  return (
    <div className="wrapper">
      {detail ? (
        <div className="video-detail">
          {showForm ? (
            <Form handleShowForm={handleShowForm} />
          ) : (
            <VideoDetailCopy details={detail} />
          )}
        </div>
      ) : (
        <div className="video-detail">Welcome to your playlist!</div>
      )}

      <div className="video-list">
        <VideoList
          onClick={onClickHandler}
          handleShowForm={handleShowForm}
          showForm={showForm}
        />
      </div>
    </div>
  );
};

export default VideoCenter;
