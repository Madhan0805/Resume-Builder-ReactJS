import React from "react";
import { Route, Routes } from "react-router-dom";
import Resume from "./components/Resume";
import "./App.css";
import CreatedResume from "./components/CreatedResume";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/createresume" element={<CreatedResume />} />
      </Routes>
    </>
  );
}

export default App;
