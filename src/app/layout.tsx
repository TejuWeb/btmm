import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bauddha Tarun Mitra Mandal | समाज • सेवा • संघर्ष",
  description: "डॉ. बाबासाहेब आंबेडकर आणि तथागत गौतम बुद्ध यांच्या विचारांनी प्रेरित गाव विकास संघटन। Bauddha Tarun Mitra Mandal dedicated to social service and community development.",
  keywords: ["BTMM", "Bauddha Tarun Mitra Mandal", "Social Service", "Ambedkarite", "Village Development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mr"
      className={`${outfit.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-inter text-foreground bg-background">
        {children}
      </body>
    </html>
  );
}
