import "./globals.css";
import type { Metadata } from "next";
import { Chakra_Petch, Exo_2 } from "next/font/google";

const chakraPetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-chakraPetch",
});

const exo2 = Exo_2({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-exo2",
});

export const metadata: Metadata = {
  title: "My home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-screen cursor-default [view-transition-name:body-transition-left] ${chakraPetch.variable} ${exo2.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
