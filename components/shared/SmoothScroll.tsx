"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis options={{ lerp: 0.08 }} root>
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
