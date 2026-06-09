import * as React from "react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

function GooeyTextDemo({
  text = ["TEXT"],
  className,
  textClassName = "text-white text-[100px]",
}: {
  text?: string[];
  className?: string;
  textClassName?: string;
}) {
  return (
    <div className="h-50 flex items-center justify-center ">
      <GooeyText
        texts={text}
        morphTime={1}
        cooldownTime={3}
        className={`font-bold geist-font border border-white w-full ${className}`}
        textClassName={textClassName}
      />
    </div>
  );
}

export { GooeyTextDemo };
