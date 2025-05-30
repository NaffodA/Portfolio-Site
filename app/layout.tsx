import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Edmond",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth overflow-x-hidden">
      <body
        className={`relative antialiased bg-black ${montserrat.variable} font-sans`}
        
      >
        {/* Blurred Gradient Background */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="fixed -top-32 left-1/4 w-[60vw] h-[60vh] bg-gradient-to-br from-green-500 via-blue-500 to-black opacity-40 blur-[120px]"></div>
          <div className="fixed bottom-0 right-1/4 w-[60vw] h-[60vh] bg-gradient-to-br from-blue-500 via-black to-green-500 opacity-40 blur-[130px]"></div>
        </div>

        {/* Page Content */}
        {children}
      </body>
    </html>
  );
}

