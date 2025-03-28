import React from "react";

const Contact = () => {
  const textData = [
    { id: 1, text: "Lorem ipsum dolor sit amet consectetur." },
    { id: 2, text: "Neque proin placerat sit" },
    { id: 3, text: "Neque proin placerat sit" },
    {
      id: 4,
      text: "Neque proin placerat sit feugiat eget risus pharetra sit a.",
    },
    { id: 5, text: "Neque proin placerat sit" },

  ];
  return (
    <div>
      <section className="bg-gradient-to-b from-[#BA0218] to-[#54010B] p-4 pb-[5rem]">
        <div className="lg:max-w-[80%] mx-auto">
          <header>
            <h1 className="text-[30px] text-[#fff] font-semibold leading-[100%] my-5">
              Pourquoi Devenir Prestataire Chez Nous?
            </h1>
          </header>

          <div className="md:flex md:justify-center md:items-center">
            <div className="p-4 flex-[1]">
              <ul className="list-disc">
                {textData.map((item) => (
                  <li
                    key={item.id}
                    className="text-[20px] text-[#fff] font-normal leading-[35px]"
                  >
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col flex-1 gap-3">
              <div className="bg-[#FFFFFF]  text-[#718096] text-[20px] rounded-[40px]">
                <label htmlFor="nom"></label>
                <input
                  type="text"
                  id="nom"
                  placeholder="Nom"
                  className="outline-none border-none p-4 px-[3rem] w-full"
                />
              </div>
              <div className="bg-[#FFFFFF] text-[#718096] text-[20px] rounded-[40px]">
                <label htmlFor="email"></label>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  className="outline-none border-none p-4 px-[3rem] w-full"
                />
              </div>
              <div>
                <button className="p-4 text-[#FFF] bg-[#718096] w-full rounded-[40px] cursor-pointer">
                  Soumettre
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
