"use client"
import { useState } from "react";
import {Icon} from "@iconify/react";
import Image from "next/image";
import flagImg from "../assets/flags/image.png"


const languages = [
  { code: "en", name: "English",},
  { code: "fr", name: "French",},
  { code: "es", name: "Spanish", },
  { code: "de", name: "German", },
];

const LanguageSelect = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[1]); // Default to French
  const [isOpen, setIsOpen] = useState(false);

  interface Language {
    code: string;
    name: string;
  }

  const handleSelect = (lang: Language): void => {
    setSelectedLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 p-2 cursor-pointer"
      >
        <Image src={flagImg} alt={selectedLanguage.code} width={24} height={16} />
        <span className="font-bold text-[#BA0218]">{selectedLanguage.code.toUpperCase()}</span>
        <Icon icon="majesticons:chevron-down" className="text-[#BA0218]" width="24" height="24" />
      </button>

      {isOpen && (
        <ul className="absolute mt-2 w-[140px] bg-white shadow-md rounded-lg border border-gray-200">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className="flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(lang)}
            >
              <Image src={flagImg} alt={lang.name} width={20} height={14} />
              <span>{lang.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelect;
