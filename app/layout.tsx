import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import GlobalBackground from "./components/background animations/globalBackground";
import ThemeProvider from "./components/themeProvider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Naimal Salahuddin",
  description: "Full-Stack Developer & Agentic AI Engineer",
  icons: {
    icon: "/logos/fav.jpg",
    shortcut: "/logos/fav.jpg",
    apple: "/logos/fav.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${dmMono.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider>
          <GlobalBackground />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
