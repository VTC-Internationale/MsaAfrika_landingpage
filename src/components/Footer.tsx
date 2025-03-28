import React from "react";
import Image from "next/image";
import footerImg from "@/assets/footerimg.png";
import { navlinks, socials } from "./constants";
import Link from "next/link";

const Footer = () => {
  const services = [
    { id: 1, name: "Nos Services", href: "/" },
    { id: 2, name: "Nos Services", href: "/" },
    { id: 3, name: "Nos Services", href: "/" },
  ];
  return (
    <div>
      <section className="bg-[#FFF] p-4 py-[3rem]">
        <div className="md:max-w-[80%] mx-auto md:flex items-center justify-center gap-[2rem]">
          <Image
            src={footerImg}
            alt="footer"
            className="my-7 h-[100px] w-[160px] md:h-[230px] md:w-[300px]"
          />

          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-[5rem]">
            <div>
              <h3 className="text-[#BA0218] text-[30px] font-semibold">
                Lien de Page
              </h3>
              <ul className="flex flex-col gap-2">
                {navlinks.map((items, index) => (
                  <li key={index}>
                    <a
                      href={items.href}
                      className="text-[#BA0218] font-light text-[25px]"
                    >
                      {items.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[#BA0218] text-[30px] font-semibold">
                Nos Services
              </h3>
              <ul className="flex flex-col gap-2">
                {services.map((items, index) => (
                  <li key={index}>
                    <a
                      href={items.href}
                      className="text-[#BA0218] font-light text-[25px]"
                    >
                      {items.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[#BA0218] text-[30px] font-semibold">
                Nos Pages
              </h3>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
