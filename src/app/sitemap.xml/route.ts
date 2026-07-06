import { NextResponse } from "next/server";
import { LOCALES, VIDEOS } from "../lib/constantes";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://highlangu.emancipa.xyz";

const PATHS = [
  {
    route: "/",
    images: [
      {
        poster: "desert-highlaŋu-emmajanemackinnonlee.png",
        title: "Desert Scene",
      },
      ...VIDEOS,
    ].map((image) => ({
      image: image.poster,
      title: image.title,
    })),
  },
];

export async function GET() {
  const urls = PATHS.map((path) => {
    const alternates = LOCALES.map(
      (locale) => `
        <xhtml:link 
          rel="alternate" 
          hreflang="${locale}" 
          href="${baseUrl}/${locale}${path?.route}" />
      `
    ).join("");

    const xDefault = `
      <xhtml:link 
        rel="alternate" 
        hreflang="x-default" 
        href="${baseUrl}${path?.route}" />
    `;

    const images = path?.images
      .map((cid) => {
        return `
      <image:image>
        <image:loc>${baseUrl}/images/${cid?.image}}</image:loc>
        <image:title><![CDATA[${cid?.title} | HIGHLAŊU Emma-Jane MacKinnon-Lee]]></image:title>
        <image:caption><![CDATA[${cid?.title} | HIGHLAŊU Emma-Jane MacKinnon-Lee]]></image:caption>
      </image:image>
    `;
      })
      .join("");

    return `
      <url>
        <loc>${baseUrl}${path?.route}</loc>
        ${alternates}
        ${xDefault}
        ${images}
      </url>
    `;
  }).join("");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
  ${urls}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
