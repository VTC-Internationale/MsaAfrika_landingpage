"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import AlertsChart from "@/components/AlertsChart";
import Piechart from "@/components/PieChart";
import { Smile } from "lucide-react";
import ChatUI from "@/components/ChatUI";
import { CalendarDays } from "lucide-react";
import { ArrowDownLeft } from "lucide-react";
import ResponseChart from "@/components/AreaChart";

const Page = () => {
  const [selected, setSelected] = useState("Client");

  const firstCard = [
    {
      title: "Paiements récents",
      total: "25,259",
      icon: "mingcute:bank-card-fill",
    },
    {
      title: "Factures en attente ",
      total: "14,534",
      icon: "basil:invoice-solid",
    },
  ];

  const options = ["Client", "Prestataire"];

  const data = [
    { percentage: "38%", label: "Mauvais" },
    { percentage: "59%", label: "Moyen" },
    { percentage: "27%", label: "Bon" },
    { percentage: "11%", label: "Excellent" },
  ];

  const tasks = [
    {
      date: "28 Aout 2024",
      description: "Rendez-vous pour une maintenance des freins comp...",
    },
    {
      date: "02 Septembre 2024",
      description: "Rendez-vous pour une maintenance des freins comp...",
    },
    {
      date: "13 Septembre 2024",
      description: "Rendez-vous pour un alignement des roues. Nos spéc...",
    },
    {
      date: "18 Octobre 2024",
      description: "Rendez-vous pour un changement de pneus. Que vo...",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-4 sm:max-w-[70%] m-auto md:max-w-full">
        {/* Left Section - Takes up 2 columns */}
        <div className="lg:col-span-2 space-y-4">
          {/* Account Balance */}
          <div className="bg-white p-6 md:p-8 rounded-lg md:flex">
            <div className="flex-[5]">
              <h2 className="text-[16px] text-[#04091E] font-medium my-4">
                Solde du compte
              </h2>
              <p className="text-[28px] font-bold text-[#04091E]">
                4 354,546 XAF
              </p>
            </div>
            <div className="md:flex justify-between items-center mt-5 w-full flex-[10] gap-4">
              {firstCard.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 my-3 w-full ${
                    index === 0 ? "md:border-r md:border-[#9EA2A6]" : ""
                  }  md:pe-5`}
                >
                  <div className="relative">
                    <Icon
                      icon="fontisto:ellipse"
                      className="translate-x-[-90%] translate-y-[30%] text-[#54010b37]"
                      width="6"
                      height="6"
                    />
                    <Icon
                      icon="fontisto:ellipse"
                      className="text-[#54010b37]"
                      width="30.43"
                      height="30.46"
                    />
                    <Icon
                      icon={item.icon}
                      className="absolute text-[#54010B] translate-y-[-110%] translate-x-[50%]"
                      width="24"
                      height="24"
                    />
                  </div>
                  <div className="flex justify-between gap-4 w-full">
                    <span>
                      <p className="text-[#5B696F] text-xs my-2">
                        {item.title}
                      </p>
                      <h3 className="text-[#000] text-[20px] font-bold ">
                        {item.total}
                      </h3>
                    </span>
                    <Icon
                      icon="ep:more"
                      className="rotate-90 text-[#04091E] mt-1"
                      width="20"
                      height="20"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-[16px] text-[#04091E] font-medium my-4">
              Solde du compte
            </h2>
            <div className="w-full h-[400px] md:h-[255px] rounded-lg overflow-hidden">
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

          {/* Statistics */}
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-[16px] text-[#04091E] font-medium my-4">
              Solde du compte
            </h2>
            <div className="">
              <AlertsChart />
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                <div className="col-span-3 mt-5 rounded-xl p-4 border border-[#9EA2A64D]">
                  <p className="text-gray-600 text-sm">
                    Temps moyen de réponse (hrs)
                  </p>
                  <div className=" flex items-center justify-between gap-4 w-full">
                    {/* Left: Chart */}
                    <div className=" w-[50%] md:w-[60%] ">
                      <ResponseChart />
                    </div>

                    {/* Right: Info */}
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold">2,534</h2>
                      <div className="flex items-center text-[13px] text-[#6A131D] font-semibold">
                        <ArrowDownLeft size={14} className="mr-1" />
                        <span>- 1.0%</span>
                        <span className="text-gray-500 ml-1">Mois dernier</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-2 mt-5 rounded-xl p-6 border border-[#9EA2A64D]">
                  <p className="text-gray-600 text-sm">Taux de satisfaction</p>

                  <div className="flex items-center justify-between w-full mt-[3rem]">
                    <h2 className="text-[#04091E] text-[64px] font-bold">
                      89 <span className="text-[25px] -ms-[1rem]">%</span>
                    </h2>
                    <div className="relative">
                      <Icon
                        icon="fontisto:ellipse"
                        className="translate-x-[-90%] translate-y-[30%] text-[#54010b37]"
                        width="6"
                        height="6"
                      />
                      <Icon
                        icon="fontisto:ellipse"
                        className="text-[#54010b37]"
                        width="38.43"
                        height="38.46"
                      />
                      <Icon
                        icon="garden:smiley-fill-12"
                        className="absolute text-[#54010B] translate-y-[-110%] translate-x-[50%]"
                        width="29"
                        height="29"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Takes up 1 column */}
        <div className="space-y-4">
          {/* Alerts */}
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-[16px] text-[#04091E] font-medium my-4">
              Alertes
            </h2>
            <Piechart />
          </div>

          {/* Feedback */}
          <div className="bg-white p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="my-4">
                <h2 className="text-[16px] text-[#04091E] font-semibold ">
                  Feedback
                </h2>
                <p className="text-[12px] text-[#5B696F] font-normal">
                  Note des clients
                </p>
              </div>
              <div className="flex border border-gray-300 rounded-[8px] overflow-hidden">
                {options.map((option, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 text-sm font-medium ${
                      selected === option
                        ? "bg-red-100 text-red-900 border border-red-900"
                        : "text-black"
                    } ${index === 0 ? "rounded-l-[8px]" : "rounded-r-[8px]"}`}
                    onClick={() => setSelected(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 gap-x-[4rem] w-full my-6">
              {data.map((item, index) => (
                <div key={index} className="flex flex-col  justify-end">
                  <span className="text-[32px] font-bold text-[#04091E]">
                    {item.percentage}
                  </span>
                  <div className="flex items-center gap-2 text-[#9EA2A6]">
                    <Smile size={20} />
                    <span className="text-[14px]">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support Chat */}
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-bold py-5">Support client</h2>
            <ChatUI />
          </div>

          <div className="bg-white rounded-xl">
            <h2 className="text-[16px] text-[#04091E] font-semibold p-4 py-6 border-b border-[#9EA2A64D]">
              Tâches à venir
            </h2>
            <div className="space-y-2">
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 border-b border-[#9EA2A64D] last:border-none"
                >
                  <div className="bg-[#6A131D] h-[6px] w-[6px] rounded-full"></div>
                  <div>
                    <div className="flex items-center gap-2 font-semibold text-[#000000] text-[14px] ">
                      <CalendarDays size={16} className="text-black" />
                      {task.date}
                    </div>
                    <p className="text-gray-500 text-xs my-2">
                      {task.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
