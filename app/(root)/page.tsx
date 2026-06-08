import NavLinks from "@/components/layout/NavLinks";
import { GooeyTextDemo } from "@/components/parts/GooeyTextDemo";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col flex-1 items-center justify-center bg-[#0a0a0a] text-[#fafafa]">
      {/* Nav Links */}
      <NavLinks/>
      <GooeyTextDemo />
    </div>
  );
}
