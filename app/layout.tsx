import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Balaji Kolli | Frontend Engineer (React.js)",
  description:
    "Balaji Kolli is a Frontend Engineer with 3.6+ years of experience building scalable enterprise applications using React.js, JavaScript, and modern UI engineering practices.",

  keywords: [
    "Balaji Kolli",
    "Frontend Engineer",
    "React Developer",
    "React.js",
    "JavaScript Developer",
    "Infosys Frontend Engineer",
    "Enterprise UI Developer",
  ],

  authors: [{ name: "Balaji Kolli" }],
  creator: "Balaji Kolli",

  openGraph: {
    title: "Balaji Kolli | Frontend Engineer (React.js)",
    description:
      "Frontend Engineer with 3.6+ years of experience building scalable enterprise React applications.",
    url: "https://balaji-kolli-portfolio.vercel.app/og-image.png", // later update with real URL
    siteName: "Balaji Kolli Portfolio",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Balaji Kolli Portfolio Preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Balaji Kolli | Frontend Engineer (React.js)",
    description:
      "Frontend Engineer building scalable enterprise React applications.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
