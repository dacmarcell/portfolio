import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { RepositoryWrapper } from "@/contexts/RepositoryContext";
import ClientOnlyDockChat from "@/components/ClientOnlyDockChat";
import { IntroWrapper } from "@/contexts/IntroContext";
import PageTransition from "@/components/motion/PageTransition";

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
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const d = document.documentElement; const m = window.matchMedia('(prefers-color-scheme: dark)'); const applyDark = () => { if (localStorage.theme === 'dark' || (!localStorage.theme && m.matches)) d.classList.add('dark'); else d.classList.remove('dark'); }; const applyPalette = () => { d.classList.remove('theme-summer','theme-winter','theme-mono'); const p = localStorage.palette; if (p === 'summer') d.classList.add('theme-summer'); if (p === 'winter') d.classList.add('theme-winter'); if (p === 'mono') d.classList.add('theme-mono'); }; applyDark(); applyPalette(); m.addEventListener('change', applyDark); } catch (e) {} })();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}
      >
        <IntroWrapper>
          <RepositoryWrapper>
            <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
              <Header />
              <PageTransition>
                {children}
              </PageTransition>
              <ClientOnlyDockChat />
            </div>
          </RepositoryWrapper>
        </IntroWrapper>
      </body>
    </html>
  );
}
