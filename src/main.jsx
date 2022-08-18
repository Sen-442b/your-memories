import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Auth } from "./pages/Auth/Auth";
import { User } from "./pages/User/User";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/:username" element={<User />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
