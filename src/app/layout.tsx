import { TooltipProvider } from "@/components/ui/tooltip";
import TanstackProvider from "@/providers/TanstackProvider";
import { ThemeProvider } from "@/providers/theme-provider";
import { ContextProviders } from "@/redux/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Md Soaib - Portfolio",
  description:
    "Full-stack developer passionate about creating beautiful, functional, and user-centered digital experiences.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <TanstackProvider>
          <ContextProviders>
            <TooltipProvider>
              <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                {children}
              </ThemeProvider>
            </TooltipProvider>
          </ContextProviders>
        </TanstackProvider>
      </body>
    </html>
  );
}
