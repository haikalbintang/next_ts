import React from "react";
import { Button } from "@/components/ui/button";
import HeroWrapper from "../4_templates/HeroWrapper";
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <HeroWrapper id="hero">
      <div className="flex justify-around items-center min-h-screen -mb-20">
        <div className="flex flex-col justify-around items h-full gap-20">
          <div>
            <h1 className={`text-5xl`}>
              <span className={styles["text-shadow-white"]}>Muhammad</span>{" "}
              <span className="text-yellow-800">Haikal</span>{" "}
              <span className="text-yellow-600">Bintang</span>
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
        <div className="rounded-lg h-[500px] w-[350px]">
          <Image
            src={"/hero/profilePicture.jpg"}
            alt=""
            width={350}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
