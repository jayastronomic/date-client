import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Registrations from "./pages/Registrations";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Registrations />} />
        <Route path="/signup" element={<Registrations />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
