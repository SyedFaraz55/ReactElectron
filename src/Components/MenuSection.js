import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import supabase from "../supabase.config";
// https://www.mercedes-benz.com/en/
// https://www.mercedes-benz.com/en/

const MenuSection = ({ setUrl, setFavs, favs, setuserModal, usermodal }) => {
  const [apps, setApps] = useState([]);
  const [appName, setName] = useState("benz");
  const [appLink, setLink] = useState("");
  const [image, setImage] = useState([]);
  const [change, setChange] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    supabase
      .from("user_db")
      .select("apps")
      .eq("email", JSON.parse(localStorage.getItem("uuid")))
      .then((data) => {
        setApps(data.data[0].apps);
      });
  }, []);
  useEffect(() => {
    setName("");
    setLink("");
    setImage("");
  }, [change]);
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
          {apps &&
            apps.map((item, index) => {
              return (
                <>
                  <option key={index} value={item.app_link}>
                    {item.app_name}
                  </option>
                </>
              );
            })}
        </select>
      </div>

      <Modal
        size="lg"
        onBackdropClick={() => setuserModal(false)}
        onEscapeKeyDown={() => setuserModal(false)}
        onHide={() => setuserModal(false)}
        show={usermodal}
      >
        <div style={{ padding: 10 }}>
          <h5 style={{ marginTop: 40 }}>Add Application</h5>
          <Form style={{ width: 300 }}>
            <input
              type="text"
              placeholder="App Name"
              onChange={(e) => setName(e.target.value)}
              value={appName}
              style={{ border: "1px solid #ccc" }}
            />
            <input
              type="text"
              placeholder="App Link"
              onChange={(e) => setLink(e.target.value)}
              value={appLink}
              style={{ border: "1px solid #ccc" }}
            />

            <input
              type="text"
              placeholder="Icon"
              onChange={(e) => setImage(e.target.value)}
              value={image}
              style={{ border: "1px solid #ccc" }}
            />

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                onChange={() => setChecked(!checked)}
              />
              <label
                class="form-check-label"
                value={checked}
                for="defaultCheck1"
              >
                Mark this as Favorite
              </label>
            </div>
            <Button
              variant="warning"
              onClick={() => {
                const d_apps = [
                  ...apps,
                  { app_name: appName, app_link: appLink },
                ];
                if (checked) {
                  const d_favs = [
                    ...favs,
                    { name: appName, appLink: appLink, image: image },
                  ];

                  supabase
                    .from("user_db")
                    .update({ favs: d_favs })
                    .eq("email", JSON.parse(localStorage.getItem("uuid")))
                    .then((res) => setFavs(res.data[0].favs));
                  setChange(true);
                  setName("");
                  setLink("");
                  setImage("");

                  setuserModal(false);
                } else {
                  supabase
                    .from("user_db")
                    .update({ apps: d_apps })
                    .eq("email", JSON.parse(localStorage.getItem("uuid")))
                    .then((res) => setApps(res.data[0].apps));
                  setChange(true);
                  setName("");
                  setLink("");
                  setImage("");

                  setuserModal(false);
                }
              }}
            >
              Add App
            </Button>
          </Form>
        </div>
      </Modal>
    </div>
  );
};
export default MenuSection;
