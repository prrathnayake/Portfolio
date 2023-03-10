import React from "react";
import styled from "styled-components";
import { navy, slate } from "../utils/colors";
import { navLinks } from "../utils/config";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  //add styles using styled-components
  const StyledNav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.backgroundColor};
    font-family: var(--font-mono);
    @media (max-width:641px){
      width: 100vw;
      position: sticky;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    img{
      height: 50px;
      padding-left: 20px;
      @media (max-width:641px){
        padding: 0;
      }
    }
    ul {
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: row;
      list-style: none;
      @media (max-width:641px){
       display: none;
        padding-top: 15px;
      }
      li {
        color: black;
        list-style: none;
        padding-left: 15px;
        padding-right: 15px;
        @media (max-width:641px){
          padding-bottom: 15px;
        }
      }
    }
  `;

  const StyledLink = styled(HashLink)`
    color: ${(props) => props.fontColor};
    text-decoration: none;
  `;

  return (
    <StyledNav backgroundColor={navy}>
      <img src={require("../../src/images/logo1.png")} alt="me" />
      <ul>
        {navLinks && // add navbar items
          navLinks.map(({ url, name }, i) => (
            <li key={i}>
              <StyledLink fontColor={slate} smooth to={url}>
                {name}
              </StyledLink>
            </li>
          ))}
      </ul>
    </StyledNav>
  );
}
