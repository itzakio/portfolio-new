import React from "react";

const Navbar = () => {
  return <div className="fixed top-0 left-0 w-full h-16 bg-transparent px-4 md:px-6 lg:px-10 flex flex-row-reverse lg:flex-row justify-between z-20">
    <button className="space-y-1.5" >
        <div className="bg-secondary h-1.5 w-8"></div>
        <div className="bg-secondary h-1.5 w-8 ml-1.5"></div>
    </button>
    <h1 className="text-secondary">Logo</h1>
  </div>;
};

export default Navbar;
