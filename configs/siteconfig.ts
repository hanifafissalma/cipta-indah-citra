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

  const keywords = `
    jasa desain arsitektur, jasa manajemen konstruksi, sertifikasi laik fungsi, arsitek profesional, konsultan konstruksi, 
    jasa desain arsitektur rumah, jasa desain rumah modern, jasa desain rumah minimalis, 
    desain rumah klasik, jasa desain bangunan komersial, arsitek terbaik di Kalimantan, jasa arsitek rumah mewah,
    jasa manajemen konstruksi gedung, konsultan manajemen proyek, kontraktor proyek konstruksi, 
    jasa manajemen proyek bangunan, jasa perencanaan konstruksi, jasa pengawasan konstruksi,
    jasa sertifikasi laik fungsi gedung, cara mengurus sertifikat laik fungsi, biaya sertifikat laik fungsi, 
    konsultan sertifikasi laik fungsi, syarat mendapatkan SLF
  `
  export const siteConfig: SiteConfig = {
    title: 'Jasa Arsitektur, Konstruksi dan SLF | Cipta Indah Citra',
    siteName: 'PT. Cipta Indah Citra',
    description: 'Cipta Indah Citra menyediakan jasa desain arsitektur, manajemen konstruksi, dan sertifikasi laik fungsi dengan layanan terbaik untuk rumah, gedung, dan proyek komersial.',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    type: 'website',
    robots: 'follow, index',
    image: `${process.env.NEXT_PUBLIC_BASE_URL}/logo.png`,
    keywords: keywords,
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
  