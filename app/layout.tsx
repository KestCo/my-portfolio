import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteNav } from "./components/SiteNav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brad J Kester | Journalist & Developer",
  description:
    "Portfolio of newsroom tools, AI experiments and workflow systems by Brad J Kester.",
  openGraph: {
    title: "Brad J Kester | Journalist & Developer",
    description:
      "Newsroom tools, AI experiments and workflow systems built around headlines, audio and editorial automation.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Brad J Kester | Journalist & Developer",
    description:
      "Newsroom tools, AI experiments and workflow systems built around headlines, audio and editorial automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
