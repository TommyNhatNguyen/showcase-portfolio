"use client";

import React, { useState, useEffect, Suspense } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  ScrambleTextPlugin,
  ScrollTrigger,
  SplitText,
  TextPlugin,
} from "gsap/all";
import { usePathname } from "next/navigation";
import LoadingPage from "../components/LoadingPage";
type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrambleTextPlugin);
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(TextPlugin);
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const path = usePathname();
  const handleToggleHamburger = () => {
    setIsHamburgerActive((prev) => !prev);
    document.body.classList.toggle("--disable-scroll");
  };

  const handleHideHamburger = () => {
    setIsHamburgerActive(false);
    document.body.classList.remove("--disable-scroll");
    window.scrollTo({
      top: 0,
    });
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
        document.body.classList.remove("--disable-scroll");
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isHamburgerActive]);

  useEffect(() => {
    handleHideHamburger();
  }, [path]);

  return (
    <>
      <Header
        isHamburgerActive={isHamburgerActive}
        handleToggleHamburger={handleToggleHamburger}
      />
      <LoadingPage />
      {children}
      <Footer />
      <Navigation
        isHamburgerActive={isHamburgerActive}
        handleHideHamburger={handleHideHamburger}
      />
    </>
  );
};

export default MainLayout;
