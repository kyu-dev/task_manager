import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;
