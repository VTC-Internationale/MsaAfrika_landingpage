"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../public/logo.png";
import { socials } from "./constants";
import LanguageSelect from "./LanguageSelect";
import { navlinks } from "./constants";
import { Icon } from "@iconify/react";
import useToggle from "../hooks/useToggle";

const Navbar: React.FC = () => {
  const [isOpen, toggle] = useToggle();

  return (
    <nav className="p-4 bg-white text-black fixed top-0 w-full shadow-sm z-50">
      <div className=" flex justify-between items-center lg:max-w-[90%] mx-auto">
        {/* logo image */}
        <Image src={logoImg} alt="alt" className="w-[100px] lg:w-[180px]" />

        <div className="lg:hidden">
          <Icon
            icon="heroicons-outline:menu"
            className="text-[#BA0218] cursor-pointer"
            width="35"
            height="35"
            onClick={toggle}
          />
        </div>

        <ul className="hidden lg:flex  justify-center items-center gap-10 mt-10">
          {navlinks.map((items, index) => (
            <li key={index}>
              <Link href={items.href}>
                <p className="text-[#4C535D] font-normal text-[18px]">
                  {items.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <div className="flex items-center gap-1">
            {/* Besoin d’aide? */}
            <div className="flex items-center gap-3">
              {socials.map((social, index) => (
                <Link href="#" key={index}>
                  <Image
                    src={social.icon}
                    alt="alt"
                    width={30}
                    height={30}
                    className="object-fit"
                  />
                </Link>
              ))}
            </div>
            <Link href="#" className="text-[#BA0218] font-normal text-[20px]">
              Besoin d’aide?
            </Link>
          </div>
          <div className="flex items-center gap-1 w-full justify-between my-3">
            <LanguageSelect />
            <Link href="#">
              <button className="bg-[#4C535D] text-[#ffffff] text-[20px] font-normal rounded-[5px] px-5 py-2.5">
                Se connecter
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden bg-[#fff] absolute top-0 shadow-sm  ${
          isOpen ? "right-0" : "-right-[100%]"
        } h-screen w-[80%] transition-all duration-600 ease-in-out flex flex-col items-center gap-[3.5rem] p-6 py-7`}
      >
        <div className="flex justify-between w-full ">
          <Icon
            icon="line-md:close"
            className="text-[#BA0218] cursor-pointer"
            width="24"
            height="24"
            onClick={toggle}
          />

          <div>
            {/* Besoin d’aide? */}
            <div className="flex items-center gap-1">
              {socials.map((social, index) => (
                <Link href="#" key={index}>
                  <Image
                    src={social.icon}
                    alt="alt"
                    width={24}
                    height={24}
                    className="object-fit"
                  />
                </Link>
              ))}
            </div>
            <Link href="#" className="text-[#BA0218] font-normal text-[14px]">
              Besoin d’aide?
            </Link>
          </div>
        </div>

        <ul className="flex flex-col justify-center items-center gap-10 mt-10">
          {navlinks.map((items, index) => (
            <li key={index}>
              <Link href={items.href}>
                <p className="text-[#4C535D] font-semibold text-[20px]">
                  {items.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1 w-full justify-between">
          <LanguageSelect />
          <Link href="#">
            <button className="bg-[#4C535D] text-[#ffffff] text-[16px] font-normal rounded-[5px] px-5 py-2.5">
              Se connecter
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
