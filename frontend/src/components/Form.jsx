import axios from "axios";
import React, { useState } from "react";

const Form = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    description: "",
  });

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onsubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/videos", JSON.stringify(formData), {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.json());
      })
      .catch((err) => {
        console.log(err);
      });

    alert("New Video Added!!");

    props.handleShowForm(false);
  };

  return (
    <div className="row">
      <div className="col-sm-9">
        <div>
          <h2>New Video</h2>
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
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
