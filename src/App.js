import React, { useState } from "react";
import Login from "./Components/Login";
import MainPage from "./Components/MainPage";
import "./App.css";

function App() {
  const [login, setLogin] = useState(true);
  return (
    <>
      {!JSON.parse(localStorage.getItem("uuid")) ? (
        <Login setLogin={setLogin} />
      ) : (
        <MainPage />
      )}
    </>
  );
}

export default App;
