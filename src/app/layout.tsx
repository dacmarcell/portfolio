import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { RepositoryWrapper } from "@/contexts/RepositoryContext";
import ClientOnlyDockChat from "@/components/ClientOnlyDockChat";
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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#16a34a" },
    ],
  },
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
              <ClientOnlyDockChat />
            </div>
          </RepositoryWrapper>
        </IntroWrapper>
      </body>
    </html>
  );
}
