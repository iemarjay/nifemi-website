import type { Metadata } from "next";
import "./globals.css";
import { AbrilFatface, AgbalumoSans } from "../../public/fonts";
import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Odeyemi ‘Nifemi’ Kehinde",
  description:
    "a Social Media Specialist, Brand Storyteller, Brand Storyteller",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${AgbalumoSans.className} ${AbrilFatface.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
