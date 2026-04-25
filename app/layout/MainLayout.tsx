"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  CustomEase,
  ScrambleTextPlugin,
  ScrollSmoother,
  ScrollTrigger,
  SplitText,
  TextPlugin,
} from "gsap/all";
import { GSDevTools } from "gsap/GSDevTools";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LoadingPage from "../components/LoadingPage";
import Navigation from "../components/Navigation";
type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrambleTextPlugin);
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollSmoother);
  gsap.registerPlugin(GSDevTools);
  gsap.registerPlugin(CustomEase);
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

  useGSAP(() => {
    // GSDevTools.create();
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
  }, []);

  return (
    <>
      <Header
        isHamburgerActive={isHamburgerActive}
        handleToggleHamburger={handleToggleHamburger}
      />
      <div id="smooth-content">
        {children}
        <Footer />
      </div>
      <Navigation
        isHamburgerActive={isHamburgerActive}
        handleHideHamburger={handleHideHamburger}
      />
      <LoadingPage />
    </>
  );
};

export default MainLayout;
