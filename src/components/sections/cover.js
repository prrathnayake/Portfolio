import React from "react";
import styled from "styled-components";
import { green, white } from "../../utils/colors";

export default function Cover() {
  const CoverBody = styled.div`
    padding: 100px 200px;
    height: 100%;
    display: flex;
    @media (max-width: 641px) {
      width: 100vw;
      display: flex;
      padding: 0 0px;
      flex-direction: column;
    }
    div {
      width: 100%;
      img {
        width: 300px;
        @media (max-width: 641px) {
          padding-left: 60px;
        }
      }
    }
  `;
  const FlexDIV = styled.div`
    padding-right: 80px;
    @media (max-width: 641px) {
      padding-left: 10px;
      width: 100%;
    }
    }
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
    width: 450px;
    font-size: 16px;
    color: ${(props) => props.fontColor};
    font-family: var(--font-sans);
    @media (max-width: 641px) {
      width: 100%;
      padding-bottom: 20px;
    }
  `;

  return (
    <CoverBody>
      <FlexDIV>
        <HeaderOne fontColor={green}>Hi, I am</HeaderOne>
        <Name fontColor={white}>Pasan Rathnayake</Name>
        <SubTitle fontColor={white}>Software Engineer</SubTitle>
        <Discription fontColor={white}>
          Hi, I'm passionate about delivering innovative and high-quality
          software solutions.
        </Discription>
      </FlexDIV>
      <div>
        <img src={require("../../images/me.jpg")} alt="me" />
      </div>
    </CoverBody>
  );
}
