import React, { useState } from "react";
import "./List.scss";

const List = (props) => {
  const onClickHandler = () => {
    console.log(`Clicked ${props.video.title}`);
    props.onClick(props.video);
  };
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item title" onClick={onClickHandler}>
          {props.video.title}
        </li>
      </ul>
    </div>
  );
};

export default List;
