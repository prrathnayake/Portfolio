import React from "react";
import styled from "styled-components";
import { green, grey, slate } from "../../utils/colors";
import LogoCpp from "../logoes/cpp";
import LogoCSS from "../logoes/css";
import LogoDocker from "../logoes/docker";
import LogoFirebase from "../logoes/firebase";
import LogoFlutter from "../logoes/flutter";
import LogoGit from "../logoes/git";
import LogoGitHub from "../logoes/gitHub";
import LogoHTML from "../logoes/html";
import LogoJavascript from "../logoes/javascript";
import LogoMongoDB from "../logoes/mongoDB";
import LogoMySQL from "../logoes/mysql";
import LogoNodeJS from "../logoes/nodeJS";
import LogoPython from "../logoes/python";
import LogoReactJS from "../logoes/reactJS";
import LogoReactNative from "../logoes/reactNative";

export default function About() {
  const AboutBody = styled.div`
    padding: 30px 200px;
    height: 100vh;
    @media (max-width: 641px) {
      padding: 0 10px;
      flex-direction: column;
      align-item: center;
      justify-content: center;
      height: 100%;
    }
  `;
  const HeaderOne = styled.h1`
    font-size: 60px;
    color: ${(props) => props.fontColor};
    font-family: var(--font-sans);
    @media (max-width: 641px) {
      padding-top: 20px;
      font-size: 40px;
    }
  `;
  const Discription = styled.p`
    padding-top: 30px;
    width: 600px;
    font-size: 16px;
    color: ${(props) => props.fontColor};
    font-family: var(--font-sans);
    font-weight: 600;
    text-align: left;
    @media (max-width: 641px) {
      width: 100%;
      text-align: justify;
    }
  `;
  const SubTitle = styled.p`
    padding-top: 20px;
    padding-bottom: 10px;
    font-size: 20px;
    color: ${(props) => props.fontColor};
  `;
  const LogoSection = styled.div`
    display: grid;
    align-items: center;
    padding-top: 10px;
    width: 600px;
    grid-template-columns: auto auto auto auto auto;
    grid-gap: 3px;
    justify-items: center;
    align-items: center;
    grid-gap: 20px 10px;
    @media (max-width: 641px) {
      width: 100%;
      grid-template-columns: auto auto auto;
    }
  `;
  return (
    <AboutBody id="about">
      <HeaderOne fontColor={green}>Who am I?</HeaderOne>
      <Discription fontColor={slate}>
        Hello, I'm Pasan Rathnayake and I'm a software engineer with a passion
        for solving complex problems and building innovative software solutions.
        With experience in various programming languages and a deep
        understanding of software development methodologies. Whether working as
        part of a team or independently, I bring creativity, attention to
        detail, and a commitment to excellence to every project I undertake.
        Browse my portfolio to see some of my recent work and to learn more
        about my skills and experience.
      </Discription>
      <SubTitle fontColor={grey}>
        Technologies that I've been worked with,
      </SubTitle>
      <LogoSection>
        <LogoHTML />
        <LogoCSS />
        <LogoJavascript />
        <LogoReactJS />
        <LogoReactNative />
        <LogoNodeJS />
        <LogoPython />
        <LogoCpp />
        <LogoGit />
        <LogoGitHub />
        <LogoMySQL />
        <LogoFlutter />
        <LogoFirebase />
        <LogoMongoDB />
        <LogoDocker />
      </LogoSection>
    </AboutBody>
  );
}
