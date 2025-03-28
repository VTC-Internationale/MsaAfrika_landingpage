"use client";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import carouselImg from "@/assets/carousel.png";
import { Icon } from "@iconify/react";

const slides = [
  {
    id: 1,
    image: carouselImg, // Change this to your actual image path
    title: "CEO AFRIKA GARAGE",
    subtitle: "PRESTATAIRE",
    text: "Lorem ipsum dolor sit amet consectetur. Neque proin placerat sit feugiat eget risus pharetra sit a.",
  },
  // Add more slides if needed
];

const Carousel = () => {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps", // Ensures one item is fully visible at a time
    align: "center",
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setCurrentIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
  }, [embla]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  return (
    <div className="relative w-full max-w-[90%] mx-auto">
      {/* Carousel Wrapper */}
      <div className="" ref={emblaRef}>
        <div className="flex gap-x-[3rem]">
          {slides.map((slide) => (
            <div  
              key={`${slide.id}-${currentIndex}`}
              className="flex-none w-[80%] mx-auto bg-gradient-to-r from-[#BA0218] to-[#54010B] rounded-t-2xl rounded-b-lg"
            >
              <div className="flex flex-col md:flex-row shadow-lg rounded-lg">
                {/* Left: Image */}
                <div className="relative w-full object-contain md:w-[40%]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover md:rounded-tl-lg"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-[#54010BE5] text-white p-3">
                    <h3 className="font-medium text-[15px]">{slide.title}</h3>
                    <p className="text-[15px] font-normal">{slide.subtitle}</p>
                  </div>
                </div>

                {/* Right: Text */}
                <div className="w-full md:w-1/2  text-white p-6 md:flex items-center">
                  <p className="text-lg md:text-[30px] text-center">
                    {slide.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 text-[#4C535D] cursor-pointer"
      >
        <Icon
          icon="ic:twotone-chevron-left"
          className="md:h-[50px] md:w-[50px]"
          width="24"
          height="24"
        />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-[#4C535D] cursor-pointer"
      >
        <Icon
          icon="ic:twotone-chevron-right"
          className="md:h-[50px] md:w-[50px]"
          width="24"
          height="24"
        />
      </button>
    </div>
  );
};

export default Carousel;
