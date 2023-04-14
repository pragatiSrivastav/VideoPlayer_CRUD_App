import axios from "axios";
import React, { useState } from "react";

const EditForm = (props) => {
  console.log("editform", props.detail);
  const [formData, setFormData] = useState({
    title: props.detail.title,
    url: props.detail.url,
    description: props.detail.description,
  });

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onsubmitHandler = (e) => {
    e.preventDefault();

    const vid = props.detail._id;
    console.log(vid);
    axios
      .patch(
        `http://localhost:5000/api/videos/${vid}`,
        JSON.stringify(formData),
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => alert("Record updated successfully"))
      .catch((err) => console.log(err));
    window.location = "/playlist";
    props.close(false);
  };

  return (
    <div className="row">
      <div className="col-sm-9">
        <div>
          <h2>Edit Video</h2>
          <form className="well" onSubmit={onsubmitHandler}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                required
                name="title"
                value={formData.title}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-group">
              <label>Url</label>
              <input
                type="text"
                className="form-control"
                required
                name="url"
                value={formData.url}
                onChange={onChangeHandler}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                required
                name="description"
                value={formData.description}
                onChange={onChangeHandler}
              />
            </div>
            <button type="submit" className="btn btn-success">
              Edit
            </button>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                props.close(false);
              }}
              style={{ marginLeft: "8px" }}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
