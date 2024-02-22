import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filter from "./Filter.jsx";
import "../index.css"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/filter" element={<Filter/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);