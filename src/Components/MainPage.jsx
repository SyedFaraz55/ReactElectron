import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import webview from "react-electron-web-view";
import { Form, Button } from "react-bootstrap";
import {
  SiFacebook,
  SiTwitter,
  SiLinkedin,
  SiDribbble,
  SiGoogle,
} from "react-icons/si";
import { BiWallet } from "react-icons/bi";
import Logo from "../res/logo.png"
export default function MainPage() {
  const [toggle, setToggle] = useState(false);
  const [appName, setName] = useState("");
  const [appLink, setLink] = useState("");
  const [url, setUrl] = useState("");

  const MenuSection = () => {
    return (
      <div style={{ background: "#fff", height: "100vh", padding: 10 }}>
        <h5>Select Application</h5>
        <div>
          <SiGoogle
            size={40}
            id="icon"
            onClick={() => {
              setUrl("https://www.gmail.com");
            }}
          />
          <SiFacebook
            size={35}
            id="icon"
            onClick={() => {
              setUrl("https://www.facebook.com");
            }}
          />
          <SiTwitter
            size={35}
            id="icon"
            onClick={() => {
              setUrl("https://www.twitter.com");
            }}
          />
          <SiLinkedin
            size={35}
            id="icon"
            onClick={() => {
              setUrl("https://www.linkedin.com");
            }}
          />
          <SiDribbble
            size={35}
            id="icon"
            onClick={() => {
              setUrl("https://www.dribbble.com");
            }}
          />
        </div>

        <h5 style={{ marginTop: 40 }}>Add Application</h5>
        <Form style={{ width: 300 }}>
          <Form.Group className="" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Application Name" />
            <Form.Control type="text" placeholder="Application Link" />
            <Button variant="warning">Add App</Button>
          </Form.Group>
        </Form>
      </div>
    );
  };

  return (
    <Row>
      {" "}
      <Col sm="3" style={{ padding: 10, marginLeft: 10 }}>
        <img src={Logo} width={80} />
        <div style={{ display: "flex", alignItems: "center",marginTop:30 }}>
          <p>
            {" "}
            <BiWallet size={30} color="#fff" />{" "}
          </p>
          <p style={{ color: "#fff", marginLeft: 10, cursor: "pointer" }}>
            Wallet
          </p>
        </div>
      </Col>
      <Col>
        {url ? (
          <webview style={{ height: "100vh" }} src={url}></webview>
        ) : (
          <MenuSection />
        )}
      </Col>
    </Row>
  );
}
