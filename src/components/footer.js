import React from "react";
import styled from "styled-components";

export default function Footer() {
  const StyledFooter = styled.footer`
    min-height: 70px;
    padding: 15px;
    text-align: center;
  `;
  return <StyledFooter>Designed & Build by Pasan Rathnayake</StyledFooter>;
}
