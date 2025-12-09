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
  keywords: [
    "services",
    "publicité",
    "qualité",
    "business",
    "e-commerce",
    "innovation",
  ],
  authors: [{ name: "Servi Group", url: "https://servi-group.vercel.app" }],
  creator: "Servi Group",
  openGraph: {
    title: "Servi Group",
    description:
      "Des services professionnels pour vos besoins quotidiens. Découvrez notre expertise et notre engagement envers la qualité.",
    url: "https://servi-group.vercel.app",
    siteName: "Servi Group",
    images: [
      {
        url: "https://servi-group.vercel.app/public/images/servigroupnoire1.png",
        width: 1200,
        height: 630,
        alt: "Servi Group Open Graph Image",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
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
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
