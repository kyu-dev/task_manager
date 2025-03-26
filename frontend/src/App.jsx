import React from "react";
import { Routes, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
//import page

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};
