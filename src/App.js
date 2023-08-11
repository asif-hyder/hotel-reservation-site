import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./scss/main.scss";
import { ErrorPage, Home, Rooms, SingleRoom } from "./pages";
import { Navbar } from "./components";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
