import React from "react";
import styled from "styled-components";
import { green, grey, slate, white } from "../../utils/colors";
import { projects } from "../../utils/config";
import Icon from "../icons/icon";

export default function Projects() {
  const ProjectsBody = styled.div`
    padding: 10px 150px;
    @media (max-width: 641px) {
      padding: 0 10px;
    }
  `;
  const HeaderOne = styled.h1`
    font-size: 60px;
    color: ${(props) => props.fontColor};
    font-family: var(--font-sans);
    padding-bottom: 30px;
    @media (max-width: 641px) {
      padding-top: 20px;
      font-size: 40px;
      padding-bottom: 10px;
    }
  `;
  const ProjectCard = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    padding-bottom: 50px;
    @media (max-width: 641px) {
      grid-template-columns: 90vw;
      width: 100px;
    }
  `;
  const ProjectDetails = styled.div`
  @media (min-width: 641px) {
    order: ${(props) => props.order};
  }
  
    @media (max-width: 641px) {
      padding-bottom: 10px;
    }
  `;
  const TechList = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 5px;
    justify-content: ${(props) => props.side};
    @media (max-width: 641px) {
      display: grid;
      grid-template-columns: auto auto auto auto;
      justify-content: left;
    }
  `;
  const TechListItem = styled.p`
    font-size: 14px;
    color: ${(props) => props.fontColor};
    font-family: var(--font-mono);
    padding-right: 12px;
    padding-left: 12px;
  `;
  const ProjectName = styled.h2`
    font-size: 25px;
    color: ${(props) => props.fontColor};
    font-family: var(--font-sans);
    text-align: ${(props) => props.side};
    @media (max-width: 641px) {
      text-align: left;
    }
  `;
  const ProjectDis = styled.h2`
    font-size: 16px;
    color: ${(props) => props.fontColor};
    font-family: var(--font-sans);
    font-weight: 400;
    width: 500px;
    text-align: justify;
    padding-top: 15px;
    @media (max-width: 641px) {
      width: 95vw;
    }
  `;

  const Image = styled.img`
  @media (min-width: 641px) {
    order: ${(props) => props.order};
  }
    height: 300px;
    padding: 0px 20px;
    @media (max-width: 641px) {
      object-fit: cover;
      width: 95vw;
      padding: 0px 0;
    }
  `;

  const Footer = styled.div`
    color: white;
    padding-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => props.side};
    @media (max-width: 641px) {
      justify-content: left;
    }
    a {
      text-decoration: none;
      color: ${(props) => props.fontColor};
      padding-right: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      p {
        font-size: 15px;
        padding-right: 5px;
      }
    }
  `;
  return (
    <ProjectsBody id="projects">
      <HeaderOne fontColor={green}>Projects</HeaderOne>
      {projects &&
        projects.map((details, i) => {
          return (
            <ProjectCard >
              <ProjectDetails  order={i % 2 === 1 ? "1" : "2"}>
                <ProjectName
                  side={i % 2 === 1 ? "left" : "right"}
                  fontColor={slate}
                >
                  {details.name}
                </ProjectName>
                <TechList side={i % 2 === 1 ? "left" : "right"}>
                  {details.techs.map((tech) => {
                    return <TechListItem fontColor={grey}>{tech}</TechListItem>;
                  })}
                </TechList>
                <ProjectDis fontColor={grey}>{details.description}</ProjectDis>
                <Footer side={i % 2 === 1 ? "left" : "right"} fontColor={white}>
                  {details.gitHub.map((gitHub) => {
                    return (
                      <a href={gitHub.link}>
                        <p>{gitHub.name} - </p>
                        <Icon name="GitHub" />
                      </a>
                    );
                  })}
                </Footer>
              </ProjectDetails>
              <Image
              order={i % 2 === 1 ? "2" : "1"}
                src={require(`../../images/projects/${details.image}`)}
                alt="myHealthSystem"
              />
            </ProjectCard>
          );
        })}
    </ProjectsBody>
  );
}
