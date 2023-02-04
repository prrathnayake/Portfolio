import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PageLayout from "../components/pageLayout";
import { green, grey } from "../utils/colors";

export default function Error404() {
  const navigate = useNavigate();

  const route = () => {
    navigate('/');
} 
  const ErrorBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
    @media (max-width: 641px) {
    }
  `;
  const HeaderOne = styled.h1`
    align-items: center;
    font-size: 200px;
    color: ${(props) => props.fontColor};
    font-family: var(--font-sans);
    @media (max-width: 641px) {
    }
  `;
  const HeaderTwo = styled.h1`
    align-items: center;
    font-size: 30px;
    color: ${(props) => props.fontColor};
    font-family: var(--font-sans);
    padding-bottom: 20px;
    @media (max-width: 641px) {
    }
  `;
  const Button = styled.button`
    align-items: center;
    font-size: 20px;
    color: ${(props) => props.fontColor};
    border: 1px solid ${(props) => props.fontColor};
    font-family: var(--font-sans);
    padding: 10px 20px;
    border-radius: 5px;
    @media (max-width: 641px) {
    }
  `;
  return (
    <PageLayout>
      <ErrorBody>
        <HeaderOne fontColor={green}>404</HeaderOne>
        <HeaderTwo fontColor={grey}>Page Not Found!!</HeaderTwo>
        <Button fontColor={green} onClick={route}>Home Page</Button>
      </ErrorBody>
    </PageLayout>
  );
}
