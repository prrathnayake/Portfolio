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
  `;
  const HeaderOne = styled.h1`
    font-size: 60px;
    color: ${(props) => props.fontColor};
    font-family: var(--font-sans);
  `;
  const Discription = styled.p`
    padding-top: 30px;
    width: 600px;
    font-size: 16px;
    color: ${(props) => props.fontColor};
    font-family: var(--font-sans);
    text-align: justify;
  `;
  const SubTitle = styled.p`
    padding-top: 20px;
    font-size: 20px;
    color: ${(props) => props.fontColor};
  `;
  const LogoSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 10px;
    width: 600px;
    > * {
      padding-right: 40px;
    }
  `;
  return (
    <AboutBody id="about">
      <HeaderOne fontColor={green}>Who am I?</HeaderOne>
      <Discription fontColor={slate}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
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
      </LogoSection>
      <LogoSection>
        <LogoPython />
        <LogoCpp />
        <LogoGit />
        <LogoGitHub />
        <LogoMySQL />
        <LogoFlutter />
      </LogoSection>
      <LogoSection>
        <LogoFirebase />
        <LogoMongoDB />
        <LogoDocker />
      </LogoSection>
    </AboutBody>
  );
}
