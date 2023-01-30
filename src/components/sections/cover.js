import React from "react";
import styled from "styled-components";
import { green, white } from "../../utils/colors";

export default function Cover() {
  const CoverBody = styled.div`
    padding: 100px 200px;
    height: 360px;
    display: flex;
  `;
  const FlexDIV = styled.div`
    padding-right: 50px;
  `;
  const HeaderOne = styled.h1`
    padding-bottom: 20px;
    font-size: 20px;
    color: ${(props) => props.fontColor};
    font-family: var(--font-mono);
  `;
  const Name = styled.h2`
    font-size: 70px;
    color: ${(props) => props.fontColor};
  `;
  const SubTitle = styled.p`
    font-size: 30px;
    color: ${(props) => props.fontColor};
  `;
  const Discription = styled.p`
    padding-top: 30px;
    width: 600px;
    font-size: 16px;
    color: ${(props) => props.fontColor};
    font-family: var(--font-sans);
  `;

  return (
    <CoverBody>
      <FlexDIV>
        <HeaderOne fontColor={green}>Hi, I am</HeaderOne>
        <Name fontColor={white}>Pasan Rathnayake</Name>
        <SubTitle fontColor={white}>Software Engineer</SubTitle>
        <Discription fontColor={white}>
          Hi welcome, I'm a software engineer with some experience in web and
          mobile development. If you're willing to hire me, contact me.
        </Discription>
      </FlexDIV>
      <img src={require("../../images/me.jpg")} alt="me" />
    </CoverBody>
  );
}
