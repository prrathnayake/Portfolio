import React from "react";
import styled from "styled-components";
import { navy, slate } from "../utils/colors";
import { navLinks } from "../utils/config";
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  //add styles using styled-components
  const NavBody = styled.nav`
    padding: 0;
    margin: 0;
  `;

  const StyledNav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: ${(props) => props.backgroundColor};
    font-family: var(--font-mono);
    ul {
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: row;
      list-style: none;
      li {
        color: black;
        list-style: none;
        padding-left: 15px;
        padding-right: 15px;
      }
    }
  `;

  const StyledLink = styled(HashLink)`
    color: ${(props) => props.fontColor};
    text-decoration: none;
  `;

  return (
    <NavBody>
      <StyledNav backgroundColor={navy}>
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
    </NavBody>
  );
}
