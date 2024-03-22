import React from "react";
import Header from "./layoutComponents/Header";
import Footer from "./layoutComponents/Footer";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
