import React from "react";
import { Outlet } from "react-router-dom";
import MobileHeader from "../header/mobileHeader/MobileHeader";
import Footer from "../footer/footer";

export default function DefaultLayout() {
  return (
    <>
      <MobileHeader />
      <div style={{ marginTop: "100px" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
