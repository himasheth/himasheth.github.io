//make a function not an object!
import React from "react";
import "./App.css";

export const Project = (props) => {
  return (
    <div className="project">
      <h2 className="project-name"> {props.name}</h2>
      <img className="image" alt={props.name} src={props.image}></img>
      <p className="description">{props.description}</p>
    </div>
  );
};
