import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e9yr5db",
        "template_9cfvpek",
        form.current,
        "24x8fx4Qpvs7xZi8T"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (<>
    <h1 className="text-white flex justify-center pt-4 text-3xl">Contact ME </h1>
    <div className="pt-5 flex justify-center border-4 border-indigo-100 ... ">
    
    <StyledContactForm className="pt-3">
      <form ref={form} onSubmit={sendEmail}>
        <label className="text-white text-xl">Name</label>
        <input type="text" name="user_name" />
        <label className="text-white text-xl">Email</label>
        <input type="email" name="user_email" />
        <label className="text-white text-xl">Message</label>
        <textarea name="message" />
        <input className="pb-5" type="submit" value="Send" />
      </form>
    </StyledContactForm>
    </div>
    <div className="pb-4 border-4 border-black ..."></div>
    <div className="text-white text-center">Made with &#10084; by Divyesh Jain</div>
    </>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;