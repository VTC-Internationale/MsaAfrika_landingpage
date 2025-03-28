import React from "react";
import { recent, note } from "@/components/constants";
import Image from "next/image";
import classesImg from "@/assets/classes.png";
import Carousel from "@/components/Carousel";
import PartnerCarousel from "@/components/PartnerCarousel";

const ServiceProviders = () => {
  const dots = [
    {
      id: 1,
      dot: <div className="w-[10px] h-[10px] rounded-full bg-[#FFF]"></div>,
    },
    {
      id: 2,
      dot: (
        <div className="w-[10px] h-[10px] rounded-full border border-[#FFF]"></div>
      ),
    },
    {
      id: 3,
      dot: <div className="w-[10px] h-[10px] rounded-full bg-[#FFF]"></div>,
    },
  ];
  return (
    <div>
      <section>
        <div className="bg-gradient-to-tr from-[#BA0218] to-[#54010B] p-4 py-8">
          <h1 className="p-4 text-[#FFF] text-center text-[35px] md:text-[60px] font-bold leading-[100%]">
            Nos Prestataires
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="bg-[#54010B40] rounded-[20px] px-8 py-3">
              <p className="text-[#FFF] text-[20px] text-center font-semi-bold my-5">
                Recent Prestataires
              </p>

              <div className="flex flex-col gap-4">
                {recent.map((item, index) => (
                  <div key={index} className="relative">
                    <Image src={item.img} alt={item.title} />
                    <p className="absolute text-[20px] text-[#fff] bg-[#BA0218F2] inline-flex px-[5px] py-[2.5px] translate-y-[-96%]">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
              {/* dots */}
              <div>
                <div className="flex justify-center items-center gap-2 my-5">
                  {dots.map((dot) => (
                    <div key={dot.id}>{dot.dot}</div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 my-5">
                <p className="text-center text-[20px] text-[#fff] leading-[100%]">
                  Lorem ipsum dolor sit amet consectetur
                </p>
                <button className="bg-[#FFF] text-[#54010B] font-normal px-5 py-2.5 rounded-[5px]">
                  Read more
                </button>
              </div>
            </div>

            <div className="bg-[#54010B40] rounded-[20px] px-8 py-3">
              <p className="text-[#FFF] text-[20px] text-center font-semi-bold my-5">
                Les Prestataires les mieux noté
              </p>

              <div className="flex flex-col gap-4">
                {note.map((item, index) => (
                  <div key={index} className="relative">
                    <Image src={item.img} alt={item.title} />
                    <div className="absolute flex items-center justify-between w-[90%] gap-2">
                      <p className=" text-[20px] text-[#FFF] bg-[#BA0218F2] inline-flex px-[5px] py-[2.5px] translate-y-[-96%]">
                        {item.title}
                      </p>
                      <Image
                        src={item.stars}
                        alt="stars"
                        className="translate-y-[-350%] w-[50px] h-[10px]"
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* dots */}
              <div>
                <div className="flex justify-center items-center gap-2 my-5">
                  {dots.map((dot) => (
                    <div key={dot.id}>{dot.dot}</div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 my-5">
                <p className="text-center text-[#FFF] text-[20px] leading-[100%]">
                  Lorem ipsum dolor sit amet consectetur
                </p>
                <button className="bg-[#FFF] text-[#54010B] font-normal px-5 py-2.5 rounded-[5px]">
                  Read more
                </button>
              </div>
            </div>

            <div className="bg-[#54010B40] rounded-[20px] px-8 py-3">
              <p className="text-[#FFF] text-[20px] text-center font-semi-bold my-5">
                Les Prestataires les mieux classés
              </p>

              <div>
                <Image src={classesImg} alt="classes" />
              </div>

              <div className="flex flex-col justify-center items-center gap-2 my-5">
                <p className="text-center text-[#FFF] text-[20px] leading-[100%]">
                  Lorem ipsum dolor sit amet consectetur
                </p>
                <button className="bg-[#FFF] text-[#54010B] font-normal px-5 py-2.5 rounded-[5px]">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="my-10">
          <Carousel />
        </div>

        <div className="my-[4rem]">
          <h1 className="p-4 text-[#54010B] text-center text-[35px] md:text-[60px] font-bold leading-[100%]">
            Nos Partenaires
          </h1>

          <div className="my-[2rem]">
            <PartnerCarousel />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceProviders;
