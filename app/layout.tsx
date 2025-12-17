import "./globals.css";
import type { Metadata } from "next";

export const metadata = {
  title: "Balaji Kolli | Frontend Engineer (React.js)",
  description:
    "Balaji Kolli is a Frontend Engineer with 3.6+ years of experience building scalable enterprise React applications.",

  openGraph: {
    title: "Balaji Kolli | Frontend Engineer (React.js)",
    description:
      "Frontend Engineer with 3.6+ years of experience building scalable enterprise React applications.",
    url: "https://balaji-kolli-portfolio.vercel.app",
    siteName: "Balaji Kolli Portfolio",
    images: [
      {
        url: "https://balaji-kolli-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Balaji Kolli Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Balaji Kolli | Frontend Engineer (React.js)",
    description:
      "Frontend Engineer building scalable enterprise React applications.",
    images: ["https://balaji-kolli-portfolio.vercel.app/og-image.png"],
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
