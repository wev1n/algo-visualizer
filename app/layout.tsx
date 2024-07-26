import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "algoillustrator",
  description:
    "AlgoIllustrator is a powerful tool for visualizing and understanding algorithms. Transform complex code into clear, interactive visual representations to enhance learning and debugging. Ideal for students, educators, and developers alike.",
};

export default function RootLayout({
  children,
  authmodal,
}: Readonly<{
  children: React.ReactNode;
  authmodal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {authmodal}
        {children}
      </body>
    </html>
  );
}
