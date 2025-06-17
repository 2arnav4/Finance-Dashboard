import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import "./index.css";
import Investments from "./pages/Investments";
import Expenses from "./pages/Expenses";
import Earnings from "./pages/Earnings";
import Savings from "./pages/Savings";
import React from "react";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#1a1a4e] to-[#210101] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/investments" element={<Investments />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/savings" element={<Savings />} />
        </Routes>
      </div>
    </>
  );
}



export default App;
