"use client"
import { useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";
import { BiBot } from "react-icons/bi";

const messagesData = [
  {
    id: 1,
    text: "Bienvenue ! Comment pouvons-nous vous aider aujourd’hui ?",
    sender: "bot",
    time: "12:35",
  },
  {
    id: 2,
    text: "Merci de nous avoir contactés. Nous avons bien reçu votre demande et reviendrons vers vous sous peu.",
    sender: "bot",
    time: "12:35",
  },
  {
    id: 3,
    text: "Mon véhicule ne démarre pas. Pouvez-vous m’aider à le dépanner ?",
    sender: "user",
    time: "12:35",
  },
];

const ChatUI = ()  => {
  const [messages, setMessages] = useState(messagesData);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessage = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages([...messages, newMessage]);
    setInput("");
  };

  return (
    <div className="">
      <div className="space-y-3 overflow-y-auto max-h-60 custom-scrollbar">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end gap-2 ${msg.sender === "user" ? "justify-end" : ""}`}
          >
            {msg.sender === "bot" && <BiBot className="text-2xl text-gray-500" />}
            <div
              className={`p-2 max-w-[70%] text-xs ${
                msg.sender === "user" ? "bg-[#54010B] text-white rounded-l-lg rounded-tr-lg" : "bg-gray-100 rounded-r-lg rounded-tl-lg"
              }`}
            >
              {msg.text}
              <span className="block text-xs text-gray-500 mt-1">{msg.time}</span>
            </div>
            {msg.sender === "user" && <IoPersonCircle className="text-2xl text-gray-500" />}
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center border-t pt-3">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg text-xs"
          placeholder="Écrire un message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="ml-2 p-2 bg-[#54010B] text-white rounded-lg"
        >
          <FaRegPaperPlane />
        </button>
      </div>
    </div>
  );
}

export default ChatUI;
