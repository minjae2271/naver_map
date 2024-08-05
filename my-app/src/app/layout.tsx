import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

import Header from "./_component/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "my own eat map",
  description: "show most famous restaurants in Korea.",
  openGraph: {
    title: "my own eat map",
    description: "show most famous restaurants in Korea.",
    type: 'website',
    siteName: 'my own eat map',
    images: [
      {
        url: ''
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
