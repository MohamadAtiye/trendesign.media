import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Container } from "@mui/material";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trendesign advertising and printing center",
  description: `Digital printing, design, and branding company in Beirut,Lebanon. Print documents, flyers, business cards, brochures, banners, UV printing, large format digital printing on flex and fabric. we provide branding services and woodworking for home and office.`,
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "digital printing",
    "business cards",
    "banners",
    "flyers and brochures",
    "large format printing",
    "uv printing",
    "laser cut",
    "cnc and woodworking",
    "branding, vinyl, and light boxes",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.trendesign.media/",
    title: "Trendesign advertising and printing center",
    description:
      "Digital printing, design, and branding company in Beirut,Lebanon. Print documents, flyers, business cards, brochures, banners, UV printing, large format digital printing on flex and fabric. we provide branding services and woodworking for home and office.",
    images: [
      {
        url: "https://www.trendesign.media/image.jpg",
        alt: "Trendesign",
      },
    ],
    siteName: "Trendesign advertising and printing center",
    phoneNumbers: ["+9611555360", "+96170888660"],
    emails: ["support@trendesign.media"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://www.trendesign.media/favicon.ico" />
        <meta
          property="og:image"
          content="https://www.trendesign.media/image.jpg"
        />
        <meta
          property="og:title"
          content="Trendesign advertising and printing center"
        />
        <link
          rel="apple-touch-icon"
          href="https://www.trendesign.media/trendIcon.png"
        />
        <link
          rel="manifest"
          href="https://www.trendesign.media/manifest.json"
        />
      </head>
      <body className={inter.className}>
        <Container
          sx={{
            padding: 0,
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <NavBar />

          {children}

          <Footer />
        </Container>
      </body>
    </html>
  );
}
