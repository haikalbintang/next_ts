import React, { ReactNode } from "react";

interface layoutProps {
  children: ReactNode;
}

const layout = ({ children }: layoutProps) => {
  return (
    <div>
      <h1>layout</h1>
      <main>{children}</main>
    </div>
  );
};

export default layout;
