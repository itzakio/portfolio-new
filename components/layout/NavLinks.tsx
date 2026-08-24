"use client"
import React from "react";
import { LetterSwapForward } from "../ui/letter-swap";
import { useAppSelector } from "@/redux/hooks";

const NavLinks = () => {
  const isOpen = useAppSelector((state) => state.mobileMenu.isOpen);
  console.log(isOpen);
  const navLink: string[] = ["Home", "About", "Contact"];
  return (
    <ul className={`jetbrains-mono-font text-3xl font-semibold fixed right-5 bottom-5 lg:left-10 lg:bottom-10 w-fit z-999`}>
      {" "}
      {navLink.map((nav, idx) => (
        <li key={idx}>
          <a href="#">
            <LetterSwapForward
              label={nav}
              reverse={false}
              className="font-bold justify-end lg:justify-start px-4"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
