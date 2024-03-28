import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { brandFont } from "./assets/fonts";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lovidia",
  description: "Resource for the Long COVID affected",
  icons: "/images/general/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${brandFont.className} antialiased`}>
        <div className="flex min-h-[100vh] flex-col">
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
