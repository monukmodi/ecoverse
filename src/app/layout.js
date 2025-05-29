import { Inter, Poppins } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Ecoverse – Powering a Greener World Through Technology",
  description:
    "Powering a Greener World Through Technology. Explore Ecoverse.info – building climate-positive apps like Climint to inspire green behavior. Join our waitlist for early access.",
  keywords:
    "climate tech, sustainability, green technology, eco-friendly apps, Climint",
  openGraph: {
    title: "Ecoverse – Powering a Greener World Through Technology",
    description:
      "Powering a Greener World Through Technology. Building climate-positive apps to inspire green behavior",
    url: "https://ecoverse.info",
    siteName: "Ecoverse",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ecoverse - Powering a Greener World Through Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecoverse – Powering a Greener World Through Technology",
    description:
      "Powering a Greener World Through Technology. Building climate-positive apps to inspire green behavior",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-background font-body text-textDark">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
