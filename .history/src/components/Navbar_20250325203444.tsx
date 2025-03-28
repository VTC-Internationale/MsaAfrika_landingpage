import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../public/logo.png";
import { socials } from "./constants";
import LanguageSelect from "./LanguageSelect";
import navlinks from "./constants";

const Navbar: React.FC = () => {
  return (
    <nav className="p-4 py-5 bg-white text-black fixed w-full font-geist-sans">
      <div className=" flex justify-between items-center">
        {/* logo image */}
        <Image src={logoImg} alt="alt" className="w-[100px]" />

        <div>
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
      </div>

      <div className="bg-[#ef9c9c] absolute top-0 right-0 h-100vh w-[80%]">
        <ul className="flex flex-col justify-center items-center gap-10 mt-10">
          {
            navlinks.map((items, index) => {
              <li>
            <Link href="#">
              <p className="text-[#4C535D] font-normal text-[14px]">Accueil</p>
            </Link>
          </li>
            })
          }
          
        </ul>
        <div>
          <LanguageSelect />
          <Link href="#">
            <button className="bg-[#4C535D] text-[#ffffff] text-[12px] font-normal rounded-[5px] px-5 py-2.5">
              Se connecter
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
