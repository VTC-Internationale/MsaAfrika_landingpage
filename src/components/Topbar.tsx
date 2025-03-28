import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import profileImg from "@/assets/profileimage.png"

interface TopbarProps {
  toggle: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ toggle }) => {
  return (
    <div className="bg-[#FFF]">
      <div className="p-4 w-full lg:max-w-[94%] mx-auto lg:flex flex-row-reverse justify-between items-center gap-[2rem]">
        <div className="flex flex-[1.5] lg:flex-row justify-between md:justify-end lg:justify-evenly items-center w-full py-3">
          <Icon
            icon="hugeicons:sidebar-left"
            width="28"
            height="28"
            onClick={toggle}
            className="text-[#04091E] cursor-pointer md:hidden"
          />
          <div className="flex items-center  gap-4 md:border-r-[2px] border-[#F5F5F5] md:h-[60px] px-4">
            <div className="relative">
              <Icon
                icon="fluent:mail-48-regular"
                width="24"
                height="24"
                className="text-[#04091E]"
              />
              <div className="absolute top-0 left-4 w-[8px] h-[8px] border-[1.5px] border-[#FFFFFF] bg-gradient-to-r from-[#FCAD02] to-[#FF0041] rounded-full"></div>
            </div>
            <div className="relative">
              <Icon
                icon="gala:bell"
                width="24"
                height="24"
                className="text-[#04091E]"
              />
              <div className="absolute top-0 left-3 w-[8px] h-[8px] border-[1.5px] border-[#FFFFFF] bg-gradient-to-r from-[#FCAD02] to-[#FF0041] rounded-full"></div>
            </div>
          </div>

          <div className="hidden lg:block xl:flex gap-4">
            <Image src={profileImg} alt="Fon Teboh" width={48} height={48} className=""/>
            <div>
              <h2 className="font-bold text-[16px] text-[#04091E]">FON TEBOH</h2>
              <p className="text-[12px] text-[#747681] font-normal">Super Admin</p>
            </div>
          </div>
        </div>
        <div className="w-full flex-[3]">
          <header className="md:flex items-center gap-4 w-full">
            <div className="md:w-[40%]">
              <h1 className="text-[#04091E] text-[24px] font-bold">
                Hello,FON TEBOH
              </h1>
              <p className="text-[14px] text-[#747681] font-normal">
                Contrôlons vos voitures aujourd&apos;hui
              </p>
            </div>
            <div className="bg-[#F6F7F9] p-2 px-4 rounded-[12px] flex items-center gap-1 mt-4 w-full sm:w-[50%] md:w-[70%]">
              <Icon
                icon="mynaui:search"
                width="24"
                height="24"
                className="text-[#04091E]"
              />
              <label htmlFor="search"></label>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Rechercher"
                className="w-full h-[35px] border-0 outline-0 text-[14px] text-[#747681] font-normal"
              />
              <Icon icon="vaadin:option-a" width="24" height="24" className="text-[#04091E]"/>
              <p className="text-[#04091E] font-semibold">K</p>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
