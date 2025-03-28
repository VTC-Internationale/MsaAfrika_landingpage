"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import partnerImg1 from "@/assets/partner1.png";
import partnerImg2 from "@/assets/partner2.png";

const PartnerCarousel = () => {

    const logos = [
        {img: (partnerImg1), alt: "Partner 1"},
        {img: (partnerImg2), alt: "Partner 2"},
        {img: (partnerImg1), alt: "Partner 3"},
        {img: (partnerImg2), alt: "Partner 4"},
        {img: (partnerImg1), alt: "Partner 5"},
        {img: (partnerImg2), alt: "Partner 6"},
    ]

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", containScroll: "trimSnaps", });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);
  return (
    <div className="relative w-full  mx-auto">
      {/* Carousel Wrapper */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-x-6 md:gap-x-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-none w-[50%] md:w-[33.33%] lg:w-[230px] flex justify-center items-center "
            >
              <Image
                src={logo.img}
                alt={logo.alt}
                className="w-[200px] h-20 object-contain"
              />
              <div className="bg-[#4C535D] w-[2px] h-[40px]"></div>
            </div>

          ))}
        </div>

        
              {/* Navigation Buttons */}
              <button
                onClick={scrollPrev}
                className={`absolute left-2 top-1/2 -translate-y-1/2 text-[#4C535D] cursor-pointer ${canScrollPrev ? '' : 'opacity-50 pointer-events-none'}`}
              >
                <Icon icon="ic:twotone-chevron-left" width="24" height="24" />
              </button>
              <button
                onClick={scrollNext}
                className={`absolute right-2 top-1/2 -translate-y-1/2 text-[#4C535D] cursor-pointer ${canScrollNext ? '' : 'opacity-50 pointer-events-none'}`}
              >
                <Icon icon="ic:twotone-chevron-right" width="24" height="24" />
              </button>
            </div>
    </div>
  )
}

export default PartnerCarousel