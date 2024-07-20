import { Rubik, Nunito } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const fonts = {
  rubik,
  nunito,
};
