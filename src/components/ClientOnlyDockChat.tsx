"use client";

import dynamic from "next/dynamic";

const Chatbot = dynamic(() => import("@/components/Chatbot"), { ssr: false });
const BottomDock = dynamic(() => import("@/components/Dock"), { ssr: false });

export default function ClientOnlyDockChat() {
  return (
    <>
      <Chatbot />
      <BottomDock />
    </>
  );
}

