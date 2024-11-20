import React from "react";
import { Button } from "@/components/ui/button";
import HeroWrapper from "../4_templates/HeroWrapper";

const Hero = () => {
  return (
    <HeroWrapper id="hero">
      <div className="flex justify-around items-center min-h-screen -mb-20">
        <div className="flex flex-col justify-around items h-full gap-20">
          <div>
            <h1 className="text-5xl">
              Muhammad Haikal <span>Bintang</span>
            </h1>
            <h3>
              <span className="italic">
                I don{"'"}t know what I do, currently trying to be a Programmer.
              </span>
              <span className="text-2xl"> 🤔</span>
            </h3>
            <h3 className="mt-10">Berbasis di Depok, Jawa Barat</h3>
          </div>
          <div className="ml-auto mr-0">
            <Button>Colek aku</Button>
          </div>
        </div>
        <div className="bg-white rounded-lg h-[500px] w-[350px]"></div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
