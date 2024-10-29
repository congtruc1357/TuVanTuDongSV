import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./reset.scss";
import Home from "./pages/home";
import Login from "./pages/login";
import Consult from "./pages/consult";
import Profile from "./pages/profile";
import Register from "./pages/register";
import LoginRequired from "./pages/loginRequired";
import Guide from "./pages/guide";
import Support from "./pages/support";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/consult" element={<Consult />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login-required" element={<LoginRequired />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/support" element={<Support />} />
            <Route path="/consult" element={<Consult />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
