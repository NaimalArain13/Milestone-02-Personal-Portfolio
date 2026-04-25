import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Cursor from "./components/cursor";
import GlobalBackground from "./components/globalBackground";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Naimal Salahuddin",
  description: "Full-Stack Developer & AI Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans`}>
        <GlobalBackground />
        <Navbar />
        {children}
        <Footer />
        <Cursor />
      </body>
    </html>
  );
}
