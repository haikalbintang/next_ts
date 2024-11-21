"use client";

import { useEffect } from "react";
import { initializeFlashlightEffect } from "@/lib/flashlightEffect";

const FlashlightProvider = () => {
  useEffect(() => {
    const cleanup = initializeFlashlightEffect();
    return cleanup;
  }, []);

  return null;
};

export default FlashlightProvider;
