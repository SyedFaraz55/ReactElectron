import React, { useEffect, useState } from "react";
import { Row, Col, Modal, Table } from "react-bootstrap";
import webview from "react-electron-web-view";
import { Form, Button, Card } from "react-bootstrap";
import { FiSettings } from "react-icons/fi";
import { FaUserCog } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { RiAddCircleFill } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import Logo from "../res/brand.png";
import MenuSection from "./MenuSection";
import firebaseApp from "../firebase.config";
import firebase from "firebase";
import supabase from "../supabase.config";
export default function MainPage() {
  const [url, setUrl] = useState("");
  const [wallet, setWallet] = useState(false);
  const [user, setUser] = useState();
  const [data, setData] = useState([]);
  const [favs, setFavs] = useState([]);
  const [check, setCheck] = useState(true);
  const [account, setAccount] = useState(false);
  const [userModal, setUserModal] = useState(false);

  const loadUser = () => {
    supabase
      .from("user_db")
      .select()
      .eq("email", JSON.parse(localStorage.getItem("uuid")))
      .then((data) => {
        setUser(data.data[0]);
        console.log(data.data[0], "here");
      });
  };

  useEffect(() => {
    loadUser();

    supabase
      .from("user_db")
      .select("favs")
      .eq("email", JSON.parse(localStorage.getItem("uuid")))
      .then((data) => {
        setFavs(data.data[0].favs);
      });
  }, []);

  return (
    <Row>
      {!check ? (
        <Col sm="3" style={{ padding: 20, marginLeft: 15 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img src={Logo} width={150} />
            <p style={{ color: "#fff", marginTop: 15, marginLeft: 0 }}>
              <FiMenu
                size={30}
                color="orange"
                onClick={() => setCheck(!check)}
                style={{ cursor: "pointer" }}
              />
            </p>
          </div>
          <div
            onClick={() => setWallet(true)}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 50,
              cursor: "pointer",
            }}
          >
            <p>
              <BiWallet size={30} color="#fff" />{" "}
            </p>
            <p style={{ color: "#fff", marginLeft: 10, cursor: "pointer" }}>
              Wallet
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 0,
              cursor: "pointer",
            }}
          >
            <p>
              <FiSettings size={30} color="#fff" />{" "}
            </p>
            <p style={{ color: "#fff", marginLeft: 10, cursor: "pointer" }}>
              Settings
            </p>
          </div>
          <div
            onClick={() => setAccount(true)}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 0,
              cursor: "pointer",
            }}
          >
            <p onClick={() => setAccount(true)}>
              <FaUserCog
                onClick={() => setAccount(true)}
                style={{ cursor: "pointer" }}
                size={30}
                color="#fff"
              />{" "}
            </p>
            <p
              onClick={() => setAccount(true)}
              style={{ color: "#fff", marginLeft: 10, cursor: "pointer" }}
            >
              Accounts
            </p>
          </div>
          <div
            onClick={() => setUserModal(true)}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 0,
              cursor: "pointer",
            }}
          >
            <p onClick={() => setUserModal(true)}>
              <RiAddCircleFill
                onClick={() => setUserModal(true)}
                style={{ cursor: "pointer" }}
                size={30}
                color="#fff"
              />{" "}
            </p>
            <p
              onClick={() => setUserModal(true)}
              style={{ color: "#fff", marginLeft: 10, cursor: "pointer" }}
            >
              Add App
            </p>
          </div>
          <div style={{ marginTop: 20 }}>
            <p style={{ color: "#fff", marginLeft: 10 }}>Quick Access</p>
            <div style={{ marginTop: 20 }}>
              <div className="row">
                {favs.map((fav) => {
                  console.log(fav, "here");
                  return (
                    <div className="col">
                      <a onClick={() => setUrl(fav.appLink)}>
                        <img
                          alt="logo"
                          src={fav.image}
                          width={60}
                          height={60}
                          style={{ borderRadius: "50%" }}
                        />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Col>
      ) : (
        <Col sm="3" style={{ padding: 20, marginLeft: 20, width: 15 }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ color: "#fff", marginTop: 10, marginLeft: -12 }}>
              <FiMenu
                size={30}
                color="orange"
                onClick={() => setCheck(!check)}
                style={{ cursor: "pointer" }}
              />
            </p>
          </div>
          <div
            onClick={() => setWallet(true)}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 50,
              cursor: "pointer",
            }}
          >
            <p>
              <BiWallet
                style={{ marginLeft: -12, marginBottom: 10, marginTop: -20 }}
                size={30}
                color="#fff"
              />{" "}
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 0 }}>
            <p>
              <FiSettings
                style={{ marginLeft: -12, marginBottom: 10 }}
                size={30}
                color="#fff"
              />{" "}
            </p>
          </div>
          <div
            onClick={() => setAccount(true)}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 0,
              cursor: "Pointer",
            }}
          >
            <p>
              <FaUserCog
                style={{ marginLeft: -12, marginBottom: 10 }}
                size={30}
                color="#fff"
              />{" "}
            </p>
          </div>
          <div
            onClick={() => setUserModal(true)}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 0,
              cursor: "Pointer",
            }}
          >
            <p>
              <RiAddCircleFill
                style={{ marginLeft: -12, marginBottom: 10 }}
                size={30}
                color="#fff"
              />{" "}
            </p>
          </div>
        </Col>
      )}
      <Col>
        {url ? (
          <>
            <div
              style={{
                background: "white",
                margin: 0,
                padding: 10,
                display: "flex",
                alignItems: "center",
              }}
            >
              <IoMdArrowRoundBack
                size={30}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setUrl("");
                }}
              />
              <div
                style={{
                  marginLeft: 20,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {favs.map((fav) => {
                  return (
                    <div style={{ marginLeft: 20 }}>
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={() => setUrl(fav.appLink)}
                      >
                        <img
                          alt="logo"
                          src={fav.image}
                          width={30}
                          height={30}
                          style={{ borderRadius: "50%" }}
                        />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
            <webview style={{ height: "100vh" }} src={url}></webview>
          </>
        ) : (
          <>
            <MenuSection
              usermodal={userModal}
              setuserModal={setUserModal}
              favs={favs}
              setFavs={setFavs}
              setUrl={setUrl}
              data={data}
              setData={setData}
            />
          </>
        )}
      </Col>
      <Modal
        size="lg"
        onBackdropClick={() => setWallet(false)}
        onEscapeKeyDown={() => setWallet(false)}
        onHide={() => setWallet(false)}
        show={wallet}
      >
        <div style={{ padding: 10 }}>
          <h5> Wallet</h5>

          <div style={{ display: "flex" }}>
            <div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Enter Appname" />
                <Form.Control type="text" placeholder="App Username or email" />
                <Form.Control type="text" placeholder="App Password" />
              </Form.Group>
            </div>
          </div>
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>App Name</th>
                  <th>Email/Username</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>LinkedIn</td>
                  <td>Otto</td>
                  <td>
                    <Button variant="link">View</Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>UI Path</td>
                  <td>Thornton</td>
                  <td>
                    <Button variant="link">View</Button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Mark</td>
                  <td>John</td>
                  <td>
                    <Button variant="link">View</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </Modal>

      {/* accounts  */}
      <Modal
        size="lg"
        onBackdropClick={() => setAccount(false)}
        onEscapeKeyDown={() => setAccount(false)}
        onHide={() => setAccount(false)}
        show={account}
      >
        <div style={{ padding: 12 }}>
          <h5> Accounts</h5>
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{user?.email}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">admin</Card.Subtitle>

                {!user?.admin ? (
                  <>
                    <Card.Link href="#">Delete</Card.Link>
                    <Card.Link href="#">Modify</Card.Link>
                  </>
                ) : null}
              </Card.Body>
            </Card>
          </div>
        </div>
      </Modal>
    </Row>
  );
}
