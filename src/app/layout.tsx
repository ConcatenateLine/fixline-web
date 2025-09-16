import "./globals.css";
import { ColorModeProvider } from "@components/ui/color-mode";
import { Provider } from "@components/ui/provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fixline",
  description: "Fixline is a ticketing system for IT support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <ColorModeProvider>
            {children}
          </ColorModeProvider>
        </Provider>
      </body>
    </html>
  );
}
