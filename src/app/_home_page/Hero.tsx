import React from "react";
import Image from "next/image";
import heroImg from "@/assets/hero.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <section className="my-[7rem] bg-gradient-to-tr from-[#ba0217] to-[#54010B] transition-all duration-500 ease-in-out h-[574px]">
        <div className="lg:flex flex-row-reverse justify-between w-full">
          <div className="lg:flex-[5] h-[300px] lg:h-[574px] lg:ms-[40rem]">
            <Image
              className="object-cover lg:object-top w-[1920px] lg:h-[574px] "
              src={heroImg}
              alt="hero"
              // layout="responsive"
            />
          </div>
          <div className="shape bg-gradient-to-tr from-[#ba0217] to-[#54010B] text-white p-4 h-[574px] w-full flex flex-col gap-5 justify-center absolute z-10 translate-y-[-51%] md:translate-y-0">
            <div className="lg:max-w-[90%] lg:mx-[5rem] xl:mx-[6rem]">
              <h1 className="text-[#FFFFFF] text-[33px] lg:text-[60px] font-bold my-3 mt-[13rem] md:mt-[1rem] leading-[100%] text-left md:text-center md:w-[550px]">
                Assistance routière rapide et fiable.
              </h1>

              <p className="font-thin text-[18px] lg:text-[20px] leading-[130%] max-w-[500px] md:text-center md:mt-[2rem]">
                Découvrez MsaAda AfriKa, la plateforme numérique qui vous offre
                une assistance routière rapide et fiable partout en Afrique.
              </p>

              <div className="flex flex-col md:flex-row gap-5 mt-5">
                <Link href="#">
                  <button className="bg-[#FFFFFF] text-[#BA0218] md:text-[20px] px-2 py-2 rounded-lg font-medium cursor-pointer">
                    Devenir Prestataire
                  </button>
                </Link>
                <Link href="#">
                  <button className="border border-[#FFFFFF] text-[#FFF] md:text-[20px] px-4 py-2 rounded-lg font-medium cursor-pointer">
                    Prendre une Rendez vous
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
