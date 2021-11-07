import React, { useState } from "react";
import { Button, InputGroup, Form, Container } from "react-bootstrap";
import Logo from "../res/iveond.png";
import firebaseApp from "../firebase.config";
import firebase from "firebase";

import supabase from "../supabase.config";

export default function Login({ setLogin }) {
  const [user, setUser] = useState("syedmohi04@gmail.com");
  const [password, setPassword] = useState("developer");
  const auth = () => {
    supabase
      .from("user_db")
      .select()
      .eq("email", user)
      .then((user) => {
        if (user.data.length === 0) {
          alert(" no user found");
        }
        console.log(user.data);
        if (user.data[0].password === password) {
          localStorage.setItem("uuid", JSON.stringify(user.data[0].email));
          localStorage.setItem("apps", JSON.stringify(user.data[0].apps));
          localStorage.setItem("favs", JSON.stringify(user.data[0].favs));
          setLogin(false);
        } else {
          alert("Please check username & password");
        }
      });
  };

  return (
    <div style={{ width: "40%", margin: "0 auto", marginTop: 200 }}>
      <div style={{ textAlign: "center", marginBottom: 45 }}>
        <img src={Logo} width="50%" />
      </div>
      <Container fluid>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={(e) => setUser(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
        <Button variant="warning" onClick={auth}>
          Login
        </Button>
      </Container>
    </div>
  );
}
