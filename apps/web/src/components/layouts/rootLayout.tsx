import Footer from "@/components/Footer/index.tsx";
import Header from "@/components/Header/index.tsx";
import React from "react";
import { Outlet } from "react-router-dom";

const Rootlayout: React.FC = () => {
  return (
    <>
      <Header isLoggedIn={false} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Rootlayout;
