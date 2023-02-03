import React, { useRef, useState } from "react";
import styled from "styled-components";
import { green, grey, lightNavy } from "../../utils/colors";
import emailjs from "@emailjs/browser";
import Icon from "../icons/icon";

export default function Contact() {
  const ContactBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding-bottom: 70px;
    position: relative;
  `;
  const HeaderOne = styled.h1`
    font-size: 60px;
    color: ${(props) => props.fontColor};
    font-family: 6var (--font-sans);
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
  const FormInput = styled.form`
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
      color: white;
      padding: 10px;
      margin-bottom: 10px;
    }
  `;
  const PopUp = styled.div`
    width: 350px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${(props) => props.bgColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-item: center;
    p {
      color: white;
      background-color: inherit;
    }
    button {
      position: absolute;
      top: 0;
      right: 0;
      background-color: ${(props) => props.bgColor};
      border: none;
    }
  `;

  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [msg, setMsg] = useState('');

  const close = (e) => {
    e.preventDefault();
    setShowPopUp(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_Email_SERVICE_CODE,
        process.env.REACT_APP_Email_TEMPLATE_CODE,
        form.current,
        process.env.REACT_APP_Email_PUBLIC_KEY
      )
      .then(
        function (response) {
          setMsg('Comment Sent, Thank You!!!');
          setLoading(false);
          setShowPopUp(true);
        },
        function (error) {
          setMsg('Something is Wrong, Please Try Again!!!Emai');
        }
      );
  };
  return (
    <ContactBody id="contact">
      <HeaderOne fontColor={green}>Contact</HeaderOne>
      <Form borderColor={green}>
        <FormInput fontColor={grey} ref={form}>
          <InputFeild>
            <label>Name</label>
            <input name="name" />
          </InputFeild>
          <InputFeild>
            <label>Email</label>
            <input type="email" name="email" required />
          </InputFeild>
          <InputFeild>
            <label>Comment</label>
            <textarea rows={10} name="comment" required />
          </InputFeild>
        </FormInput>
        <div>
          <button onClick={sendEmail}>
            {loading ? "Sending Message" : "Send"}
          </button>
        </div>
      </Form>
      {showPopUp ? (
        <PopUp bgColor={lightNavy}>
          <button onClick={close}>
            <Icon name={"close"} height={30} />
          </button>
          <p>{msg}</p>
        </PopUp>
      ) : null}
    </ContactBody>
  );
}
