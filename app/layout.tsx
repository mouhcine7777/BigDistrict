import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const chreed = localFont({
  src: "/fonts/Chreed.ttf",
  variable: "--font-chreed",
});

export const metadata: Metadata = {
  title: "",
  description: "Let's build something amazing together",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistMono.variable} ${chreed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
