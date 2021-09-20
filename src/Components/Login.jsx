import React, { useState } from "react";
import { Button, InputGroup, Form, Container } from "react-bootstrap";
import Logo from "../res/logo.png";
export default function Login({ setLogin }) {
  const [user, setUser] = useState("adf");
  const [password, setPassword] = useState("adf");
  const auth = ()=> {
      if(user === '' && password === '') {
          alert('username or password incorrect')
      } else {
          setLogin(false)
      }
  }
  return (
    <div style={{ width: "40%", margin: "0 auto", marginTop: 200 }}>
      <div style={{textAlign:"center",marginBottom:45}}>
        <img src={Logo} width="30%" />
      </div>
      <Container fluid>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Enter username" onChange={e=> setUser(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Enter Password" onChange={e => setPassword(e.target.value)} />
          </Form.Group>
        </Form>
        <Button variant="warning" onClick={auth}>Login</Button>
      </Container>
    </div>
  );
}
