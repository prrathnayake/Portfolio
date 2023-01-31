import React from "react";
import styled from "styled-components";
import { green } from "../../utils/colors";

export default function Projects() {
  const ProjectsBody = styled.div`
    padding: 10px 200px;
    height: 100vh;
  `;
  const HeaderOne = styled.h1`
    font-size: 60px;
    color: ${(props) => props.fontColor};
    font-family: var(--font-sans);
  `;
  return (
    <ProjectsBody id="projects">
      <HeaderOne fontColor={green}>Projects</HeaderOne>
    </ProjectsBody>
  );
}
