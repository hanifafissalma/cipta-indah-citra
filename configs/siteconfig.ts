export interface SiteConfig {
    title: string
    siteName: string
    description: string
    url: string | undefined
    type:
      | 'article'
      | 'book'
      | 'music.song'
      | 'music.album'
      | 'music.playlist'
      | 'music.radio_station'
      | 'profile'
      | 'website'
      | 'video.tv_show'
      | 'video.other'
      | 'video.movie'
      | 'video.episode'
    robots: string
    image: string
    keywords: string
    author: string
  }
  
  type Favicons = {
    rel: string
    href: string
    sizes?: string
    type?: string
  }
  
  export const siteConfig: SiteConfig = {
    title: 'PT. Cipta Indah Citra',
    siteName: 'PT. Cipta Indah Citra',
    description: 'PT. Cipta Indah Citra',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    type: 'website',
    robots: 'follow, index',
    image: `${process.env.NEXT_PUBLIC_BASE_URL}/logo.png`,
    keywords: 'PT. Cipta Indah Citra',
    author: 'PT. Cipta Indah Citra',
  }
  
  export const favicons: Array<Favicons> = [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/logo_180.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      href: '/logo_192.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/logo_32.png',
    },
  ]
  