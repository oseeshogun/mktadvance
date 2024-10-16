import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MKT Advance",
  description:
    "Nous sommes une entreprise congolaise spécialisée dans la conception, production et affichage de vos supports de visibilité.",
  generator: "Next.js",
  keywords: [
    "Marketing",
    "MKT Advance",
    "Congolaise",
    "Affichage",
    "Publicité",
  ],
  openGraph: {
    images: '/assets/images/mkt-advance.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${openSans.className}  antialiased`}>{children}</body>
    </html>
  );
}
