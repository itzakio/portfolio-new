import Navbar from "@/components/layout/Navbar";
import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
  <div className="min-h-screen">
      <nav className="w-full"><Navbar/></nav>
      <main className="flex-1 w-full bg-amber-200 z-0">{children} </main>
      <footer className="w-full">footer</footer>
    </div>
  );
};

export default HomeLayout;
