import { FC, ReactNode } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Head from 'next/head'

interface LayoutProps {
    children: ReactNode
}
const schemaData = {
    "@context": "https://schema.org/",
    "@type": "LocalBusiness",
    "name": "Cipta Indah Citra",
    "url": "https://www.ciptaindahcitra.com",
    "logo": "https://www.ciptaindahcitra.com/logo.png",
    "description": "Cipta Indah Citra menyediakan jasa desain arsitektur, manajemen konstruksi, dan sertifikasi laik fungsi dengan layanan terbaik untuk rumah, gedung, dan proyek komersial.",
    "address": {
        "@type": "Gg. Mekar No.8, Akcaya, Kec. Pontianak Sel., Kota Pontianak, Kalimantan Barat",
        "addressLocality": "Kalimantan Barat",
        "addressCountry": "ID"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+62 821-2566-0808",
        "contactType": "customer service"
    }
    }
const LayoutDefault: FC<LayoutProps> = (props: LayoutProps) => {
    return(
        <>
            <Head>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
            </Head>
            <Navbar />
            <div className="mx-auto bg-white relative mt-20">
                {props.children}
            </div>
            <Footer />
        </>
    )
}
export default LayoutDefault