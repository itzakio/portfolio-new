"use client";
import { toggle } from "@/redux/features/mobileMenu/mobileMenuSlice";
import { useAppDispatch } from "@/redux/hooks";
import Image from "next/image";
import React from "react";

const Navbar = () => {
    const dispatch = useAppDispatch();
  return (
  <div className="border fixed top-0 left-0 w-full h-16 bg-transparent px-4 md:px-6 lg:px-10 flex items-center flex-row-reverse lg:flex-row justify-between z-999">
      <button
        onClick={() => dispatch(toggle())}
        className="space-y-1.5 cursor-pointer"
      >
        <div className="bg-secondary h-1.5 w-8"></div>
        <div className="bg-secondary h-1.5 w-8 ml-1.5"></div>
      </button>
      <div className="text-secondary">
        <Image src="/logo.png" alt="Abu Saleh" width={48} height={48}/>
      </div>
    </div>
  );
};

export default Navbar;
