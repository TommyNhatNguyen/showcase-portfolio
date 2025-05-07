"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin, ScrollTrigger, SplitText } from "gsap/all";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrambleTextPlugin);
  gsap.registerPlugin(SplitText);
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const handleToggleHamburger = () => {
    setIsHamburgerActive((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isHamburgerActive &&
        !target.closest(".btn-hamburger") &&
        !target.closest(".nav__list")
      ) {
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
      <Navigation isHamburgerActive={isHamburgerActive} />
    </>
  );
};

export default MainLayout;
