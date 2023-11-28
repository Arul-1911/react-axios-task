import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Button, Container, Header } from "semantic-ui-react";

import { API_URL } from "../constants/URL";
import { useNavigate } from "react-router-dom";

const Read = () => {
  const [apiData, setAPIData] = useState([]);
  const navigate = useNavigate();

  const updateUser = ({ id, name, username, email }) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    navigate("/update");
  };

  const deleteUser = async (id) => {
    await axios.delete(API_URL + id);

    callgetAPI();
  };

  const callgetAPI = async () => {
    const resp = await axios.get(API_URL);
    const combinedData = [...resp.data];

    setAPIData(combinedData);
  };

  const adduser = async () => {
    try {
      navigate("/");
    } catch (error) {
      console.error("Error adding user:", error.message);
    }
  };
  useEffect(() => {
    callgetAPI();
  }, []);

  return (
    <>
      <Container className="TableContainer">
        <Header as="h2">User List</Header>
        <Table celled inverted striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Username</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Delete</Table.HeaderCell>
              <Table.HeaderCell>Update</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {apiData.map((data) => (
              <Table.Row key={data.id}>
                <Table.Cell
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  {data.id}
                </Table.Cell>
                <Table.Cell
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  {data.name}
                </Table.Cell>
                <Table.Cell
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  {data.username}
                </Table.Cell>
                <Table.Cell
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  {data.email}
                </Table.Cell>
                <Table.Cell>
                  <Button
                    color="red"
                    className="deleteBtn"
                    onClick={() => deleteUser(data.id)}
                  >
                    Delete
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    color="teal"
                    className="updateBtn"
                    onClick={() => updateUser(data)}
                  >
                    Update
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

        <Button color="green" onClick={adduser} className="addbtn">
          Add User
        </Button>
      </Container>
    </>
  );
};

export default Read;
