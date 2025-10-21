import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; 
import Footer from "./_components/UI/footer/Footer";
import Navbar from "./_components/UI/navbar/Navbar";
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SEITC",
  description: "Sociedad Estudiantil de Ingenieria en Tecnologias Computacionales",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Theme>
          <Navbar />
          <main className="pt-20">
            {children}
            
          </main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
