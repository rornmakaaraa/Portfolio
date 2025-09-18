import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/app/components/Header/header";
import Footer from "@/app/components/Footer/footer";
import { ThemeProvider } from "@/app/components/ThemeProvider/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio website built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider>
          <Header />
          <main className="flex-1 container mx-auto px-6 py-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}