import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/provider/ThemeProvider";
import Navbar from "../components/common/Navbar";
import Footer from "@/components/common/Footer";


export const metadata: Metadata = {
  title: "Vapour - A Next.js Game Catalogue",
  description: "vapor game catalogue",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
