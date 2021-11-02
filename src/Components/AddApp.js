import React from "react";

const AddApp = () => {
  return (
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
      </div>
    </Modal>
  );
};
