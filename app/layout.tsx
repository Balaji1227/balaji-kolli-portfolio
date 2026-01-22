import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* BASIC SEO */}
        <title>Balaji Kolli | Frontend Engineer (React.js)</title>
        <meta
          name="description"
          content="Balaji Kolli is a Frontend Engineer with 3.6+ years of experience building scalable enterprise React applications."
        />

        {/* OPEN GRAPH (LINKEDIN FIX) */}
        <meta property="og:title" content="Balaji Kolli | Frontend Engineer (React.js)" />
        <meta
          property="og:description"
          content="Frontend Engineer with 3.6+ years of experience building scalable enterprise React applications."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://balaji-kolli-portfolio.vercel.app"
        />
        <meta
          property="og:image"
          content="https://balaji-kolli-portfolio.vercel.app/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Balaji Kolli | Frontend Engineer (React.js)"
        />
        <meta
          name="twitter:description"
          content="Frontend Engineer building scalable enterprise React applications."
        />
        <meta
          name="twitter:image"
          content="https://balaji-kolli-portfolio.vercel.app/og-image.png"
        />

        {/* FAVICON */}
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>{children}</body>
    </html>
  );
}
