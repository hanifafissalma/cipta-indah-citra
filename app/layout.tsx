/* eslint-disable @next/next/no-page-custom-font */
import { Karla } from "next/font/google";
import "./globals.css";
import "./globalicon.css";
import { favicons, siteConfig } from '@/configs/siteconfig'
import Head from 'next/head'


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
      <Head>
        <title>Jasa Arsitektur, Konstruksi dan SLF | Cipta Indah Citra</title>
        <meta name="description" content="Cipta Indah Citra menyediakan jasa desain arsitektur, manajemen konstruksi, dan sertifikasi laik fungsi dengan layanan terbaik untuk rumah, gedung, dan proyek komersial." />
        <meta name="keywords" content="jasa desain arsitektur, jasa manajemen konstruksi, sertifikasi laik fungsi, arsitek profesional, konsultan konstruksi, jasa desain arsitektur rumah, jasa desain rumah modern, " />
        <meta name="author" content="Cipta Indah Citra" />
        <meta property="og:title" content="Jasa Arsitektur & Konstruksi | Cipta Indah Citra" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ciptaindahcitra.com" />
        <meta property="og:image" content="https://ciptaindahcitra.com/logo.png" />
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=optional" />
      </Head>
      <body className={`bg-white text-md text-black ${karla.className}`} >
        {children}
      </body>
    </html>
  );
}
