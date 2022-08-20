import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Belgium from "./components/belgium";
import Tunisia from "./components/tunisia";
import London from "./components/london";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <div className="entry">
            <p>
              "Hello I'm Khamais Maaroufi a Software Developer specialized in
              working with React Library I've developed This SPA web application
              so i can practice the Client-side navigation using
              react-route-dom, feel free to take a quick tour in between pages
              that shows images from different countries 😉."
            </p>
            <NavBar />

            <ToastContainer />
          </div>
        }
      ></Route>
      <Route
        path="/tunisia"
        element={
          <div className="App">
            <NavBar />
            <Tunisia />
            <ToastContainer />
          </div>
        }
      />
      <Route
        path="/belgium"
        element={
          <div className="App">
            <NavBar />
            <Belgium />
            <ToastContainer />
          </div>
        }
      />
      <Route
        path="/london"
        element={
          <div className="App">
            <NavBar />
            <London />
            <ToastContainer />
          </div>
        }
      />
      <Route
        path="*"
        element={
          <div className="App">
            <h1>Not Found Sorry!</h1>
            <ToastContainer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
