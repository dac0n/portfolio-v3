import "./globals.css";
import type { Metadata } from "next";
import { Chakra_Petch, Exo_2, Bai_Jamjuree } from "next/font/google";
import AppLayout from "@/components/app-layout/AppLayout";
import Script from "next/script";

const chakraPetch = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-chakraPetch",
});

const baiJamjuree = Chakra_Petch({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-baiJamjuree",
});

const exo2 = Exo_2({
  weight: ["200", "300", "400", "500", "600", "700"],
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
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body
        className={`h-screen w-screen animate-fade-in cursor-default bg-bgColor ${chakraPetch.variable} ${exo2.variable}`}
      >
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
