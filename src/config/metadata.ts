import { Metadata } from "next";
import { siteConfig } from "./site";

export const sharedMetadata: Metadata = {
  metadataBase: new URL(`${process.env.SITE_URL}`),
  title: {
    default: `${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  openGraph: {
    type: "website",
    title: `${siteConfig.name}`,
    description: `${siteConfig.description}`,
    siteName: `${siteConfig.name}`,
    images: [
      {
        url: `/icons/richlink.jpg`,
      },
    ],
  },
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon-16x16.png",
    apple: "/icons/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    site: `${siteConfig.name}`,
    creator: "Salman",
    images: `/icons/richlink.jpg`,
  },
  description: `${siteConfig.description}`,
  authors: [{ name: "Salman", url: "https://github.com/caamaann" }],
};
