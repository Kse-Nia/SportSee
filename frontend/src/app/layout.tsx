import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../style/main.css";
import Layout from "../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SportSee - Your daily sport tracking app",
  description: "SportSee is the best app to track your daily sport activities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
