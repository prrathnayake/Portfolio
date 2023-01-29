import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export default function PageLayout({children}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
