/* eslint-disable @next/next/no-page-custom-font */
import { Karla } from "next/font/google";
import "./globals.css";
import { favicons, siteConfig } from '@/configs/siteconfig'


const karla = Karla({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
  ),
  title: {
    template: `%s | ${siteConfig.title}`,
    default: siteConfig.title,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords.split(',').map((val) => val),
  authors: [
    {
      name: siteConfig.author,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: siteConfig.type,
    siteName: siteConfig.siteName,
    description: siteConfig.description,
    title: siteConfig.title,
    images: siteConfig.image,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicons */}
        {favicons.map((linkProps) => (
          <link key={linkProps.href} {...linkProps} />
        ))}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/logo_180.png"
        />
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=optional" />
      </head>
      <body className={`bg-white text-md text-black ${karla.className}`} >
        {children}
      </body>
    </html>
  );
}
