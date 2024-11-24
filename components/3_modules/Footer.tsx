import React from "react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const contacts = [
    {
      id: 1,
      src: "/contact/wa.svg",
      alt: "WhatsApp",
      username: "+62 878-7790-1515",
      link: "https://wa.me/6287877901515",
    },
    {
      id: 1,
      src: "/contact/gmail.png",
      alt: "Google Mail",
      username: "mhaikalbintang.work@gmail.com",
      link: "mailto:mhaikalbintang.work@gmail.com",
    },
  ];
  const socmeds = [
    {
      id: 1,
      src: "/contact/github.svg",
      alt: "GitHub",
      username: "haikalbintang",
      link: "https://github.com/haikalbintang",
    },
    {
      id: 1,
      src: "/contact/linkedin.svg",
      alt: "LinkedIn",
      username: "muhammad-haikal-bintang",
      link: "https://www.linkedin.com/in/muhammad-haikal-bintang/",
    },
    {
      id: 1,
      src: "/contact/ig.svg",
      alt: "Instagram",
      username: "haikalbintang",
      link: "https://www.instagram.com/haikalbintang/",
    },
  ];

  return (
    <>
      <Separator className="h-[2px]" />
      <footer className="flex flex-col justify-between items-center py-2 px-20">
        <div className="p-4 flex w-full">
          <div className="flex flex-col items-center w-1/3">
            <h2>KONTAK</h2>
          </div>
          <div className="flex flex-col items-center w-1/3">
            <h2>MEDIA SOSIAL</h2>
          </div>
          <div className="flex flex-col items-center w-1/3">
            <h2 className="font-semibold text-lg tracking-wider mb-2">
              KONTAK
            </h2>
            <ul>
              {contacts.map((contact) => (
                <li key={contact.alt}>
                  <Link
                    className="flex items-center my-3 gap-3"
                    href={contact.link}
                    target="_blank"
                  >
                    <Image
                      src={contact.src}
                      alt={contact.alt}
                      width={32}
                      height={32}
                    />
                    <p className="text-sm">{contact.username}</p>
                  </Link>
                </li>
              ))}
              {socmeds.map((socmed) => (
                <li key={socmed.alt}>
                  <Link
                    className="flex items-center my-3 gap-3"
                    href={socmed.link}
                    target="_blank"
                  >
                    <Image
                      src={socmed.src}
                      alt={socmed.alt}
                      width={32}
                      height={32}
                    />
                    <p className="text-sm">{socmed.username}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator className="h-[2px]" />
        <div className="flex flex-col py-4">
          <h6 className="text-xs text-center">
            © 2024 Muhammad Haikal Bintang.
          </h6>
          <h6 className="text-xs text-center">All rights reserved.</h6>
        </div>
      </footer>
    </>
  );
};

export default Footer;
