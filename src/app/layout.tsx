import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/shared/Navbar";

const montserrat = Montserrat({ subsets: ["latin"],
  weight: ['400','500','600','700'],
  variable: "--montserrat",
 });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn('font-montserrat antialiased',montserrat.variable)}>
        
        <Navbar />
        {children}
        </body>
    </html>
  );
}