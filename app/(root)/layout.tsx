import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* <nav className="w-full">navbar</nav> */}
      <main className="flex-1 w-full bg-amber-200">{children}</main>
      <footer className="w-full">footer</footer>
    </div>
  );
};

export default HomeLayout;
