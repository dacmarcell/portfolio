"use client";

import personalConfig from "@/utils/personalConfig";
import { FaRegCopy } from "react-icons/fa";

const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

export default function Informations() {
  return (
    <div className="flex flex-col justify-center p-10 bg-slate-200/[0.5] md:rounded-3xl md:mr-4">
      <h1 className="font-semibold text-xl">Contato</h1>
      <div className="inline-flex items-center group">
        <button
          className="text-md text-center text-black rounded-lg hover:underline focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600"
          onClick={() => copyToClipboard(personalConfig.email)}
        >
          {personalConfig.email}
        </button>
        <FaRegCopy className="ml-2 hidden text-black dark:text-white group-hover:inline" />
      </div>
    </div>
  );
}
