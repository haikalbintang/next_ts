import React from "react";
import Section from "../4_templates/Section";
import Image from "next/image";

const Education = () => {
  return (
    <Section id="education">
      <h2 className="text-center text-2xl mb-4">Pendidikan</h2>
      <ol className="grid grid-cols-6 grid-rows-1">
        <li className="flex flex-col justify-center items-center text-center">
          <Image src={"/education/TK.png"} alt="" width={150} height={150} />
          <h3>TK Nurul Iman</h3>
        </li>
        <li className="flex flex-col justify-center items-center text-center gap-2">
          <Image src={"/education/sd.png"} alt="" width={106} height={106} />
          <h3>SD Putra Jaya</h3>
        </li>
        <li className="flex flex-col justify-center items-center text-center gap-2">
          <Image src={"/bangor.png"} alt="" width={120} height={120} />
          <h3>SMPN 2 Depok</h3>
        </li>
        <li className="flex flex-col justify-center items-center text-center gap-2">
          <Image src={"/smansa.png"} alt="" width={110} height={110} />
          <h3>SMAN 1 Depok</h3>
        </li>
        <li className="flex flex-col justify-center items-center text-center gap-3">
          <Image src={"/UI.png"} alt="" width={110} height={110} />
          <h3>Fakultas Kedokteran UI</h3>
        </li>
        <li className="flex flex-col justify-center items-center text-center gap-1">
          <Image src={"/revou.png"} alt="" width={100} height={100} />
          <h3>RevoU Full-Stack Software Engineering</h3>
        </li>
      </ol>
    </Section>
  );
};

export default Education;
