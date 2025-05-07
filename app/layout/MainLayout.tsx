"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const handleToggleHamburger = () => {
    setIsHamburgerActive((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isHamburgerActive && !target.closest(".btn-hamburger")) {
        setIsHamburgerActive(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isHamburgerActive]);

  return (
    <>
      <Header
        isHamburgerActive={isHamburgerActive}
        handleToggleHamburger={handleToggleHamburger}
      />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
