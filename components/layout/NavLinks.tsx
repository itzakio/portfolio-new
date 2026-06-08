import React from "react";
import { RandomLetterSwapForward } from "../ui/random-letter-swap";

const NavLinks = () => {
  const navLink: string[] = ["Home", "About", "Contact"];
  return (
    <ul className="jetbrains-mono-font text-3xl font-semibold absolute left-10 bottom-10 ">
      {" "}
      {navLink.map((nav, idx) => (
        <li key={idx}>
          <a href="#">
            <RandomLetterSwapForward
              label={nav}
              reverse={false}
              className="font-bold justify-start px-4"
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
