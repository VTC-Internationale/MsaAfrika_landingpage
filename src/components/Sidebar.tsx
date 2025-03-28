"use client";
import React, { useState } from "react";
import Image from "next/image";
import LogoImg from "/public/logo.png";
import { dashboardLinks } from "./constants";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
  const [active, setActive] = useState<string | null>(null);

  const handleActive = (name: string) => {
    setActive(name);
  };

  return (
    <div>
      <div
        className={`fixed md:sticky top-0 z-50 ${
          isOpen ? "left-0" : "-left-[100%]"
        } h-screen w-[269px] bg-[#FFF] text-white transition-all duration-500 ease-in-linear`}
      >
        <div className="h-full overflow-y-auto custom-scrollbar p-6">
          <Icon
            icon="hugeicons:sidebar-left"
            width="28"
            height="28"
            onClick={toggle}
            className="text-[#04091E] cursor-pointer md:hidden"
          />
          <div>
            <Image src={LogoImg} className="object-cover" alt="logo" />
          </div>

          <nav>
            <ul className="flex flex-col space-y-2 mt-4">
              {dashboardLinks.map((item, index) => (
                <Link href={item.href} key={index}>
                  <li
                    className={`text-[#54010B] flex items-center space-x-2 px-3 py-3 rounded-[10px] cursor-pointer ${
                      active === item.name
                        ? "bg-[#54010B] text-[#FFF] font-semibold"
                        : ""
                    } transition-all duration-300 ease-in-linear`}
                    onClick={() => handleActive(item.name)}
                  >
                    <Icon icon={item.icon as string} />
                    <p>{item.name}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
