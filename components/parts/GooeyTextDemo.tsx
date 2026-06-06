import * as React from "react";
import { GooeyText } from "@/components/ui/gooey-text-morphing";

function GooeyTextDemo() {
  return (
    <div className="h-50 flex items-center justify-center ">
      <GooeyText
        texts={["Akash", "Akio", "Parvej", "Lovelu", "Ridoy","Utsho" ]}
        morphTime={1}
        cooldownTime={2}
        className="font-bold jetbrains-mono-font "
        textClassName="text-white"
      />
    </div>
  );
}

export { GooeyTextDemo };