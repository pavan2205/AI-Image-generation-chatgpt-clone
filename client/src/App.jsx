import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home, CreatePost, ChatGpt, HomePage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      {/* <main className="sm:p-8 w-full bg-[#f9fafe] min-h-[calc(100vh - 73px)]"> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/imagehome" element={<Home />} />
        <Route path="/imagehome/create-post" element={<CreatePost />} />
        <Route path="/chatgpt" element={<ChatGpt />} />
      </Routes>
      {/* </main> */}
    </BrowserRouter>
  );
};

export default App;
