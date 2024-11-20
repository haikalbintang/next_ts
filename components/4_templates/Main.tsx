import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Main = ({ children }: Props) => {
  return <main className="flex flex-col">{children}</main>;
};

export default Main;
