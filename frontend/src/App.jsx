import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, SendMoney, Signin, Signup } from "./pages/export";
import Loading from "./pages/Loading";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loading />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
