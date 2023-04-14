import React, { useEffect, useState } from "react";

import "./videoDetail.scss";
import EditForm from "./EditForm";
import axios from "axios";

const VideoDetailCopy = (props) => {
  const [showEditForm, setEditForm] = useState(false);
  const close = (inp) => {
    setEditForm(inp);
  };

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:5000/api/videos/${props.details._id}`)
      .then((res) => alert("Record deleted successfully"))
      .catch((err) => console.log(err));
    window.location = "/playlist";
  };

  return (
    <div>
      <div>
        <div>
          <iframe
            src={props.details.url}
            width="90%"
            height="400"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            title={props.details.title}
          ></iframe>
        </div>
        {showEditForm && <EditForm detail={props.details} close={close} />}
        {!showEditForm && (
          <div>
            <button
              type="submit"
              className="btn btn-success"
              onClick={() => setEditForm(true)}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={deleteHandler}
              style={{ marginLeft: "8px" }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoDetailCopy;
