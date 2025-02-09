"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function Chatbot() {
  return (
    <FloatingWhatsApp
      allowEsc
      placeholder="Me fale sobre seu projeto! 🚀"
      accountName="Marcell"
      avatar="/hero-design.png"
      phoneNumber="5571992760849"
      chatMessage="Precisa de um software sob medida para o seu negócio? Me conte sua ideia e eu te ajudo a torná-la realidade! 💡👨‍💻"
      statusMessage="⏳ Poucas vagas disponíveis! Vamos conversar?"
      chatboxHeight={500}
    />
  );
}
