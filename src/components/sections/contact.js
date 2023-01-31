import React from "react";
import styled from "styled-components";
import { green } from "../../utils/colors";

export default function Contact() {
  const ContactBody = styled.div`
    padding: 10px 200px;
    height: 100vh;
  `;
  const HeaderOne = styled.h1`
    font-size: 60px;
    color: ${(props) => props.fontColor};
    font-family: var(--font-sans);
  `;
  return (
    <ContactBody id="contact">
      <HeaderOne fontColor={green}>Contact</HeaderOne>
    </ContactBody>
  );
}
