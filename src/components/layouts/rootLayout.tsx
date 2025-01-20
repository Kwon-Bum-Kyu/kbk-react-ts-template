import Footer from "@/components/Footer/index.tsx";
import Header from "@/components/Header/index.tsx";
import React from "react";
import { Outlet } from "react-router-dom";

const Rootlayout: React.FC = () => {
  return (
    <div className={`min-h-[100vh] min-w-[100vh]`}>
      <Header isLoggedIn={false} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Rootlayout;
