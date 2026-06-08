import React from "react";

const Navbar = () => {
  return <div className="h-16 bg-primary px-4 md:px-6 lg:px-10 border flex justify-between ">
    <button className="space-y-1.5" >
        <div className="bg-secondary h-1.5 w-8"></div>
        <div className="bg-secondary h-1.5 w-8 ml-1.5"></div>
    </button>
    <h1 className="text-secondary">Logo</h1>
  </div>;
};

export default Navbar;
