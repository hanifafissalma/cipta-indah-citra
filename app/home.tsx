"use client"

import LayoutDefault from "@/components/LayoutDefault";
import bg1 from '@/public/bg-1.png'
import bg2 from '@/public/bg-2.png'

const HalamanUtama = () => {
    return(
        <LayoutDefault>
            <div>nanti ini slider</div>
            <div className="w-5/6 mx-auto">
                ini counting
            </div>
            <div className="w-5/6 mx-auto">
                <div className="font-bold text-xl mb-3 text-center">Layanan Kami</div>
            </div>
            <div className="w-5/6 mx-auto flex flex-col items-center justify-center" style={{ background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),  url(${bg1.src})`, width: '100%', height: '400px'}}>
                <div className="font-bold text-4xl mb-3 text-center text-white shadow-md">Kami Hadir untuk Anda</div>
                <div className="font-semibold text-2xl text-center text-white shadow-md">
                    dengan komitmen yang kuat mensukseskan pembangunan<br/>agar menghasilkan kualitas bangunan yang sesuai<br/>
                    dengan standar sertifikasi.
                </div>
            </div>
            <div className="w-5/6 mx-auto">
                <div className="font-bold text-xl mb-3 text-center">Layanan Kami</div>
            </div>
            <div className="w-5/6 mx-auto flex flex-col items-center justify-center" style={{ background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),  url(${bg2.src})`, width: '100%', height: '400px', backgroundSize: 'cover'}}>
                
            </div>
        </LayoutDefault>
    )
}
export default HalamanUtama