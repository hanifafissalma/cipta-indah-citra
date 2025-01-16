import LayoutDefault from "@/components/LayoutDefault"
import banner from '@/public/banner.png'

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
                    <p className="text-xl mt-4">
                        Perusahaan konsultan yang bergerak dibidang Design Arsitektur, 
                        Manajemen Konstruksi (MK), dan Pengkaji Teknis Pemeriksaan Syarat 
                        Sertifikat Laik Fungsi (SLF)</p>
                </div>
            </div>
        </LayoutDefault>
    )
}
export default Profil