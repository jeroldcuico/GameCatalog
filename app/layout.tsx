import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/provider/ThemeProvider";
import { SidebarProvider} from "@/components/ui/sidebar";
import { AppSidebar } from "./components/ui/AppSidebar";
import Navbar from "../components/ui/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
              <main>
                {children}
              </main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
