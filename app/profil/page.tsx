import LayoutDefault from "@/components/LayoutDefault"
import banner from '@/public/banner.png'
import profil from '@/public/profil.png'
import FadeInUp from "@/components/FadeInUp"

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
                    <FadeInUp>
                        <h1 className="text-4xl font-bold">PT. Cipta Indah Citra</h1>
                    </FadeInUp>
                    <FadeInUp delay=".4s">
                        <p className="text-xl mt-4 md:w-full lg:w-2/3 mx-auto">
                            Perusahaan konsultan yang bergerak dibidang Design Arsitektur, 
                            Manajemen Konstruksi (MK), dan Pengkaji Teknis Pemeriksaan Syarat 
                            Sertifikat Laik Fungsi (SLF)
                        </p>
                    </FadeInUp>
                </div>
            </div>
            <section>
                <div className="w-5/6 mx-auto py-16">
                    <FadeInUp>
                        <center>
                            <div className="text-4xl font-bold mb-4 border-b-2 border-gray-800 inline-block">Visi</div>
                        </center>
                    </FadeInUp>
                    <div className="md:w-full lg:w-2/3 mx-auto mt-8 text-center">
                        <FadeInUp>
                            <p>
                                Konsultan Total Layanan mulai dari Design Gedung, 
                                Manajemen Konstruksi (MK) hingga Pengkaji Teknis / 
                                Pemeriksaan Syarat Sertifikat Laik Fungsi (SLF)
                            </p>
                        </FadeInUp>
                        <FadeInUp>
                            <p className="mt-4"><b>Bidang</b>: Arsitektur, Struktur, Mekanikal, Elektrikal & Tek. Lingkungan</p>
                        </FadeInUp>
                        <FadeInUp>
                            <p><b>Semboyan</b>:  R2S  (Responsive, SMART & Solutio)</p>
                        </FadeInUp>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-5/6 mx-auto py-16">
                    <FadeInUp>
                        <center>
                            <div className="text-4xl font-bold mb-4 border-b-2 border-gray-800 inline-block">Misi</div>
                        </center>
                    </FadeInUp>
                    <div className="md:w-full lg:w-2/3 mx-auto mt-8 text-justify">
                        <FadeInUp>
                            <ol className="custom-list">
                                <li>
                                    Konsultan Design/Perencanaan metode BIM (Building Information Modeling), 
                                    3 dimensi & multi disiplin dalam 1 file sehingga menghasilkan design akurat, 
                                    cepat, efisien & integrited serta pemilik bisa tahu progress di ponsel 
                                    Android program BIM-X.
                                </li>
                                <li>
                                    Konsultan Manajemen Konstruksi (MK) mampu menjaga mutu, volume/quantity & 
                                    waktu & review sampai mengeluarkan rekomendasi untuk mengeluarkan Sertifikat 
                                    Laik Fungsi (SLF) apabila gedung sudah selesai & dioperasikan.
                                </li>
                                <li>
                                    Pengkaji Teknis ber-SKA : Arsitek, Struktur, Mekanikal, Elektrikal & Teknik Lingkungan 
                                    untuk memeriksa syarat/ketentuan memperoleh: Sertifikat Laik Fungsi (SLF) Gedung bagi 
                                    gedung yang sudah ada/lama berdiri.
                                </li>
                            </ol>
                        </FadeInUp>
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
                    <FadeInUp>
                        <div className="font-bold text-5xl mb-3 text-center text-white drop-shadow-md">Komitmen Kami</div>
                    </FadeInUp>
                    <FadeInUp delay=".4s">
                        <div className="font-semibold text-2xl text-center text-white drop-shadow-md md:w-full lg:w-2/3 mx-auto">
                            Memberikan layanan terbaik dengan profesionalisme tinggi untuk memenuhi kebutuhan setiap klien
                        </div>
                    </FadeInUp>
                </div>
            </div>
        </LayoutDefault>
    )
}
export default Profil