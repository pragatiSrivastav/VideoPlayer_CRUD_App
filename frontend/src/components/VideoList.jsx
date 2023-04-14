import React from "react";
import Video from "./Video";

const VideoList = (props) => {
  const handleShow = () => {
    console.log("Handle Show from Video list working");
    props.handleShowForm(!props.showForm);
  };
  return (
    <div>
      <div>
        <button
          style={{ marginBottom: "2px", padding: "12px 32px" }}
          type="button"
          className="btn btn-success btn-block"
          onClick={handleShow}
        >
          + New Video
        </button>
      </div>
      <Video onClick={props.onClick} />
    </div>
  );
};

export default VideoList;
