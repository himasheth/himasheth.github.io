import { render } from "@testing-library/react";
import React from "react"
import App from './App';
import { projectList, extracurricularList } from "./data/Data";

// Note: want to switch to describe.. it.. tests for better readbility 

test("will render all the projects provided in projectList", () => {
  let length = projectList.length
  render(
    <App />
  );
  expect(projectList[length - 1]["name"].toBeInTheDocument)
})

test("will render all the extracurriculars provided", () => {
  let length = extracurricularList.length
  render(
    <App />
  );
  expect(extracurricularList[length - 1]["name"].toBeInTheDocument)
})