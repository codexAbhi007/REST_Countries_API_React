import React, { useState } from "react";
import "./main.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import {  ThemeProvider } from "./contexts/ThemeContext.js";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default App;
