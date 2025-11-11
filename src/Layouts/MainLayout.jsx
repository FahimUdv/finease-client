import Footer from "Components/Footer";
import Loading from "Components/Loading";
import Navbar from "Components/Navbar";
import bgImg from "../assets/cover.png";
import React from "react";
import { Outlet, useNavigation } from "react-router";

const MainLayout = () => {
  const { state } = useNavigation();
  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="relative bg-cover bg-center h-[620px]"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <Navbar></Navbar>
      </div>
      <main className="flex-1 mx-auto w-full">
        {state == "loading" ? <Loading /> : <Outlet></Outlet>}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
