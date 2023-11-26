import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constants/URL";

const Update = () => {
  const navigate = useNavigate();

  const updatesubmit = async () => {
    await axios.put(API_URL + id, {
      name,
      username,
      email,
    });
    navigate("/read");
  };

  const [id, setid] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setid(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setUsername(localStorage.getItem("username"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const updatetoback = () => {
    navigate("/read");
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
        />
      </Form.Field>
      <br />
      <Button onClick={updatesubmit}>UPDATE</Button>
      <br />
      <Button onClick={updatetoback}>BACK</Button>
    </Form>
  );
};

export default Update;
