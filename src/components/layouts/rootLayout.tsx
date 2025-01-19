import Footer from "@/components/Footer/index.tsx";
import Header from "@/components/Header/index.tsx";
import React from "react";
import { Outlet } from "react-router-dom";

const Rootlayout: React.FC = () => {
  return (
    <div className={`min-h-[100vh]`}>
      <Header isLoggedIn />
      <div className="w-max-[1920px] container w-[1920px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Rootlayout;
