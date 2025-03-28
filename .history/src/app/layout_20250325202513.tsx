import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you need
  variable: "--font-league-spartan", // Optional: Define a CSS variable
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan} antialiased`}
      >
        <Na
        {children}
      </body>
    </html>
  );
}
