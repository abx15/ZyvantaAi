import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Providers from "@/components/Providers";
import AuthProvider from "@/components/AuthProvider";
import { DecisionBar } from "@/components/DecisionBar";
import { Header } from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zyvanta - Intelligence for Everyday Life",
  description:
    "Advanced AI decision engine for Health, Education, and Agriculture.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <AuthProvider>
          <Providers>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1 pb-24">{children}</main>
              <DecisionBar />
            </div>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  );
}
