import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { RepositoryWrapper } from "@/contexts/RepositoryContext";
import Chatbot from "@/components/Chatbot";
import BottomDock from "@/components/Dock";
import { IntroWrapper } from "@/contexts/IntroContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfólio DevMarcell",
  description: "Portfólio do DevMarcell",
  applicationName: "Portfólio DM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900`}
      >
        <IntroWrapper>
          <RepositoryWrapper>
            <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
              <Header />
              {children}
              <Chatbot />
              <BottomDock />
            </div>
          </RepositoryWrapper>
        </IntroWrapper>
      </body>
    </html>
  );
}
