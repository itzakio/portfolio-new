import Hero from "@/components/layout/Hero";
import NavLinks from "@/components/layout/NavLinks";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col flex-1 items-center justify-center bg-[#0a0a0a] text-[#fafafa]">
      {/* Nav Links */}
      <NavLinks/>
      <Hero/>
    </div>
  );
}
