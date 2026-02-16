import type { Metadata } from "next";
import { Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const notoKufi = Noto_Kufi_Arabic({
  variable: "--font-kufi-arabic",
  subsets: ['arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: "Cloud Hosting",
  description: "Cloud hosting project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${ notoKufi.variable } ${ notoKufi.className } antialiased`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}