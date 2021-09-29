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
import { IoMdArrowRoundBack } from "react-icons/io";
import Logo from "../res/logo.png";
export default function MainPage() {
  const [toggle, setToggle] = useState(false);
  const [appName, setName] = useState("");
  const [appLink, setLink] = useState("");
  const [url, setUrl] = useState("");

  const [data, setData] = useState([
    {name:"Google",link:"https://www.gmail.com",},
    {name:"Facebook",link:"https://www.facebook.com"},
    {name:"Twitter",link:"https://www.twitter.com"},
    
  ]);
  const MenuSection = () => {
    return (
      <div style={{ background: "#fff", height: "100vh", padding: 20 }}>
        <h5>Select Application</h5>
        <div style={{ width: "400px" }}>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => setUrl(e.target.value)}
          >
            <option selected>Select Application</option>
            {data.map(item => {
              return (
                <>
                <option value={item.link}>{item.name}</option>
                </>
              )
            })}
          </select>
        </div>
        <h5 style={{ marginTop: 40 }}>Add Application</h5>
        <Form style={{ width: 300 }}>
          <Form.Group className="" >
            <Form.Control
              type="text"
              onchange={(e) => setName(e.target.value)}
              placeholder="Application Name"
              value={appName}
              
            />
            <Form.Control
              type="text"
              onChange={(e) => setLink(e.target.value)}
              placeholder="Application Link"
              value={appLink}
            />
            <Button
              variant="warning"
              onClick={() => {
                if (appName === "" && appLink === "") {
                  alert("AppName & AppLink is required");
                } else {
                  const prevData = [...data,{name:appName,link:appLink}]
                  setData(prevData)
                }
              }}
            >
              Add App
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  };

  return (
    <Row>
      <Col sm="3" style={{ padding: 20, marginLeft: 10 }}>
        <img src={Logo} width={80} />
        <div style={{ display: "flex", alignItems: "center", marginTop: 30 }}>
          <p>
            <BiWallet size={30} color="#fff" />{" "}
          </p>
          <p style={{ color: "#fff", marginLeft: 10, cursor: "pointer" }}>
            Wallet
          </p>
        </div>
      </Col>
      <Col>
        {url ? (
          <>
            <div
              style={{
                background: "white",
                margin: 0,
                padding: 10,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <IoMdArrowRoundBack
                size={30}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setUrl("");
                }}
              />
              <div style={{ width: "400px" }}>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  onChange={(e) => {
                    setUrl(e.target.value);
                  }}
                >
                  <option selected value="">
                    Select Application
                  </option>
                  <option value="https://www.gmail.com">Google</option>
                  <option value="https://www.facebook.com">Facebook</option>
                  <option value="http://www.twitter.com">Twitter</option>
                  <option value="https://www.linkedin.com">LinkedIn</option>
                </select>
              </div>
            </div>
            <webview style={{ height: "100vh" }} src={url}></webview>
          </>
        ) : (
          <>
            <MenuSection />
          </>
        )}
      </Col>
    </Row>
  );
}
