import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import "./index.css";
import React from "react";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
