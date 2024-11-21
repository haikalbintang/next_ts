"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";

export function ProgressBar() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(
        () => setProgress((prev) => prev + 5),
        150 - progress
      );
      return () => clearTimeout(timer);
    }
  }, [progress]);

  return <Progress value={progress} className="w-full mx-auto" />;
}
