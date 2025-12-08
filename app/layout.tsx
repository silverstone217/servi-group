import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/lib/fonts";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Servi Group",
  description:
    "Des services professionnels pour vos besoins quotidiens. Découvrez notre expertise et notre engagement envers la qualité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.className} scroll-smooth antialiased pt-24`}>
        <Header />
        <main className="">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
