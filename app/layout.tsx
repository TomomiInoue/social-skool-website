import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "./components/Layout/Header/Header";
import { Footer } from "./components/Layout/Footer/Footer";


const oswald = Geist({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const inter = Geist({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SOCIAL SKOOL BY KEELEY IVERSON",
  description: "Social Sckool specialises in social media management & content creation, ensuring that your brand’s message resonates and is reflected in your social media all whilst delivering measurable outcomes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oswald.variable} ${inter.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
