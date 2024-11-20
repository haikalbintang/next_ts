import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  return <Skeleton className="w-[100px] h-[20px] rounded-full" />;
};

export default loading;
