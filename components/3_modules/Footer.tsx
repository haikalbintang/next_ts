import React from "react";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <>
      <Separator className="h-[2px]" />
      <footer className="flex flex-col justify-between items-center py-2 px-20">
        <div className="flex w-full">
          <div className="flex flex-col w-1/3">
            <h2>KONTAK</h2>
          </div>
          <div className="flex flex-col w-1/3">
            <h2>MEDIA SOSIAL</h2>
          </div>
          <div className="flex flex-col w-1/3"></div>
        </div>
        <Separator className="h-[2px]" />
        <div className="flex flex-col py-4">
          <h6 className="text-sm text-center">
            © 2024 Muhammad Haikal Bintang.
          </h6>
          <h6 className="text-sm text-center">All rights reserved.</h6>
        </div>
      </footer>
    </>
  );
};

export default Footer;
