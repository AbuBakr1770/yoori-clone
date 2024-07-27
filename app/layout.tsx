"use client";
import type { Metadata } from "next";
import { Inter, Nunito, Vollkorn } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/layout/navbar";
import { Providers } from "./providers";
import { fonts } from "./fonts";
import Footer from "./components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });
const vollkorn = Vollkorn({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: any;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Providers>
          <Navbar />

          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
