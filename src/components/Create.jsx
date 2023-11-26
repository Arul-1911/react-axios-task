import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { API_URL } from "../constants/URL";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const isEmailValid = (email) => {
    //  email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const postData = async () => {
    try {
      if (!name || !username || !email) {
        // Validation: Check if any of the fields are empty
        console.error("All fields are required");
        return;
      }

      if (!isEmailValid(email)) {
        // Validation: Check if the email is valid
        alert("Please enter a valid email address");
        return;
      }

      const response = await axios.post(API_URL, {
        name,
        username,
        email,
      });

      console.log("Response:", response.data);
      navigate("/read");
    } catch (error) {
      console.error(
        "Error posting data:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <Form className="form">
      <Form.Field>
        <label>Name : </label>
        <input
          placeholder="Enter your Name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          required
        />
      </Form.Field>
      <br />
      <Form.Field>
        <label>UserName : </label>
        <input
          placeholder="Enter your UserName"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          required
        />
      </Form.Field>
      <br />
      <Form.Field>
        <label>Email : </label>
        <input
          placeholder="Enter your Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          required
        />
      </Form.Field>
      <br />
      <Button onClick={postData}>Submit</Button>
    </Form>
  );
};

export default Create;
