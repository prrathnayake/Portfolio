import React from "react";
import styled from "styled-components";
import { green, grey } from "../../utils/colors";

export default function Contact() {
  const ContactBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-bottom: 70px;
  `;
  const HeaderOne = styled.h1`
    font-size: 60px;
    color: ${(props) => props.fontColor};
    font-family:6var(--font-sans);
  `;
  const Form = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    text-align: left;
    div {
      margin-left: auto;
      margin-right: auto;
      button {
        width: 200px;
        padding: 10px 20px;
        border-color: ${(props) => props.borderColor};
        color: ${(props) => props.borderColor};
      }
    }
  `;
  const FormInput = styled.div`
    color: ${(props) => props.fontColor};
  `;
  const InputFeild = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    label {
      padding-bottom: 10px;
    }
    input,
    textarea {
      padding: 10px;
      margin-bottom: 10px;
    }
  `;
  return (
    <ContactBody id="contact">
      <HeaderOne fontColor={green}>Contact</HeaderOne>
      <Form borderColor={green}>
        <FormInput fontColor={grey}>
          <InputFeild>
            <label>Name</label>
            <input />
          </InputFeild>
          <InputFeild>
            <label>Email</label>
            <input />
          </InputFeild>
          <InputFeild>
            <label>Comment</label>
            <textarea rows={10} />
          </InputFeild>
        </FormInput>
        <div>
          <button>Send</button>
        </div>
      </Form>
    </ContactBody>
  );
}
