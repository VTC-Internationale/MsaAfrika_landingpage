import React from "react";
import msaImg from "@/assets/image.png";
import Image from "next/image";

const WhatisMSA = () => {
  return (
    <div>
      <section className="transition-all duration-500 ease-in-out mt-[6rem] md:mt-[23rem] lg:mt-[5rem]">
        <div className="lg:max-w-[90%] mx-auto relative">
          <div className="w-[270px] h-full">
            <Image
              src={msaImg}
              alt="msa"
              // layout="responsive"
              className="absolute left-0 -top-[10%] md:left-[40%] md:w-[270px] md:-[289px]"
            />
          </div>
          <div className="mt-10 p-4 max-w-[950px] mx-auto">
            <h1 className="text-[#BA0218] text-center text-[35px] md:text-[60px] font-bold leading-[100%]">
              Qu&apos;est-ce que MSA Afrika ?
            </h1>
            <p className="mt-3 text-[#4C535D] font-thin text-[20px] md:text-[30px] text-center leading-[110%]">
              MsaAda AfriKa est une plateforme en ligne qui offre une assistance
              routière rapide et fiable aux conducteurs en difficulté en
              Afrique. Nous utilisons la technologie pour connecter les
              conducteurs avec des professionnels de l&apos;assistance en temps
              réel. Notre objectif est de rendre les routes plus sûres et de
              garantir la tranquillité d&apos;esprit des conducteurs.
            </p>
          </div>
        </div>

        <div className="mt-[5rem]">
          <h1 className="p-4 text-[#BA0218] text-center text-[35px] md:text-[60px] font-bold leading-[100%]">
            Localisation des couverage
          </h1>

          <div className="w-full h-[400px] md:h-[600px]">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Cameroon&output=embed"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatisMSA;
