import { GooeyTextDemo } from "@/components/parts/GooeyTextDemo";
import Image from "next/image";

export default function Home() {
  const navLink: string[] = ["Home", "About", "Contact"];
  return (
    <div className="min-h-screen w-full flex flex-col flex-1 items-center justify-center bg-[#0a0a0a] text-[#fafafa]">
      {/* Nav Links */}
      <ul className="jetbrains-mono-font text-3xl font-semibold absolute left-10 bottom-10 ">
        {" "}
        {navLink.map((nav, idx) => (
          <li key={idx}>
            <a href="#">{nav}</a>
          </li>
        ))}
      </ul>
      <GooeyTextDemo />
    </div>
  );
}
