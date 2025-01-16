import LayoutDefault from "@/components/LayoutDefault"
import banner from '@/public/banner.png'
import profil from '@/public/profil.png'

const Profil = () => {
    return(
        <LayoutDefault>
            <div 
                style={{ 
                    background: `url(${banner.src})`,
                    height: '40vh',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    position: 'relative',
                }}
                className="text-white text-center flex items-center"
            >
                <div className="w-5/6 mx-auto">
                    <h1 className="text-4xl font-bold">PT. Cipta Indah Citra</h1>
                    <p className="text-xl mt-4 w-2/3 mx-auto">
                        Perusahaan konsultan yang bergerak dibidang Design Arsitektur, 
                        Manajemen Konstruksi (MK), dan Pengkaji Teknis Pemeriksaan Syarat 
                        Sertifikat Laik Fungsi (SLF)</p>
                </div>
            </div>
            <section>
                <div className="w-5/6 mx-auto py-16">
                    <center>
                        <div className="text-4xl font-bold mb-4 border-b-2 border-gray-800 inline-block">Visi</div>
                    </center>
                    <div className="w-2/3 mx-auto mt-8">
                        <ul>
                            <li>
                                Konsultan Total Layanan mulai dari Design Gedung, 
                                Manajemen Konstruksi (MK) hingga Pengkaji Teknis / 
                                Pemeriksaan Syarat Sertifikat Laik Fungsi (SLF)
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <div 
                className="flex flex-col items-center justify-center" 
                style={{ 
                    background: `linear-gradient( to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${profil.src})`, 
                    width: '100%', 
                    height: '400px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top'
                }}
            >
                <div className="w-5/6 mx-auto">
                    <div className="font-bold text-5xl mb-3 text-center text-white drop-shadow-md">Komitmen Kami</div>
                    <div className="font-semibold text-2xl text-center text-white drop-shadow-md w-2/3 mx-auto">
                        Memberikan layanan terbaik dengan profesionalisme tinggi untuk memenuhi kebutuhan setiap klien
                    </div>
                </div>
            </div>
        </LayoutDefault>
    )
}
export default Profil