import React, { useEffect, useState } from "react";

import "./videoDetail.scss";
import axios from "axios";

const VideoDetail = (props) => {
  const t = props.details.title;
  const u = props.details.url;
  const d = props.details.description;

  console.log(t, u, d);
  const [ti, setTi] = useState(props.details.title);

  // const [formData, setFormData] = useState({
  //   title: t,
  //   url: u,
  //   description: d,
  // });

  const onChangeHandleT = (e) => {
    e.preventDefault();
    setTi(e.target.value);
  };
  // const onChangeHandle = (e) => {
  //   console.log("uu");
  //   setFormData({ [e.target.name]: e.target.value });
  // };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const vid = props.details._id;
    console.log(vid);
    axios
      .patch(
        `http://localhost:5000/api/videos/${vid}`,
        JSON.stringify({ title: ti }),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => alert("Record updated successfully"))
      .catch((err) => console.log(err));

    setTi(e.target.value);
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
            //title={formData.title}
          ></iframe>
        </div>
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <input
              type="input"
              className="form-control"
              name="title"
              required
              placeholder="title"
              onChange={onChangeHandleT}
              value={ti}
              // defaultValue={props.details.title}
            />
          </div>

          {/* {!editTitle && <h3 onClick={onTitleClick}>{props.details.title}</h3>} */}
          {/* <div className="form-group">
            <input
              type="input"
              className="form-control"
              name="url"
              required
              placeholder="url"
              onChange={onChangeHandle}
              value={formData.url}
              //value={props.details.url}
            />
          </div>
          <div className="form-group">
            <input
              type="input"
              className="form-control"
              name="description"
              required
              placeholder="description"
              onChange={onChangeHandle}
              value={formData.description}
              //value={props.details.description}
            />
          </div> */}
          <button type="submit" className="btn btn-success">
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default VideoDetail;
