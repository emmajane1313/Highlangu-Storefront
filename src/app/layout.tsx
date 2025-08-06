import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Highlaŋu — Storefront",
  description:
    "Wear your roots. Highland-Yolŋu Alliance for Maximum Resistance Experience.",
  robots: {
    googleBot: {
      index: true,
      follow: true,
    },
  },
  metadataBase: new URL("https://highlangu.emancipa.xyz/"),
  keywords:
    "Web3, Web3 Fashion, Moda Web3, Open Source, CC0, Emma-Jane MacKinnon-Lee, Open Source LLMs, DIGITALAX, F3Manifesto, www.digitalax.xyz, www.f3manifesto.xyz, Women, Life, Freedom.",
  twitter: {
    card: "summary_large_image",
    site: "@emmajane1313",
    title: "Highlaŋu — Storefront",
    description:
      "Wear your roots. Highland-Yolŋu Alliance for Maximum Resistance Experience.",
  },
  openGraph: {
    title: "Highlaŋu — Storefront",
    description:
      "Wear your roots. Highland-Yolŋu Alliance for Maximum Resistance Experience.",
  },
  creator: "Emma-Jane MacKinnon-Lee",
  publisher: "Emma-Jane MacKinnon-Lee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="selection:bg-mar selection:text-rojo">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://emmajanemackinnonlee.com/#person",
              name: "Emma-Jane MacKinnon-Lee",
              url: "https://emmajanemackinnonlee.com/",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://emmajanemackinnonlee.com/",
              },
              sameAs: [
                "https://emmajanemackinnonlee.com/",
                "https://emmajanemackinnon.com/",
                "https://janefuture.com/",
                "https://emmajane.ai/",
                "https://emmajanemackinnonlee.xyz/",
                "https://emmajanemackinnonlee.net/",
                "https://emmajanemackinnonlee.ai/",
                "https://emmajanemackinnonlee.org/",
                "https://emmajanemackinnonlee-history.com/",
                "https://emmajanemackinnonlee-cc0.com/",
                "https://emmajanemackinnonlee-celtic.com/",
                "https://emmajanemackinnonlee-f3manifesto.com/",
                "https://emmajanemackinnonlee-digitalax.com/",
                "https://emmajanemackinnonlee-runway.com/",
                "https://icoinedweb3fashion.com/",
                "https://syntheticfutures.xyz/",
                "https://web3fashion.xyz/",
                "https://emancipa.xyz/",
                "https://highlangu.com/",
                "https://digitalax.xyz/",
                "https://cc0web3fashion.com/",
                "https://cc0web3.com/",
                "https://cuntism.net/",
                "https://dhawu.com/",
                "https://casadeespejos.com/",
                "https://emancipa.net/",
                "https://dhawu.emancipa.xyz/",
                "https://highlangu.emancipa.xyz/",
                "https://twitter.com/emmajane1313",
                "https://medium.com/@casadeespejos",
                "https://www.flickr.com/photos/emmajanemackinnonlee/",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
