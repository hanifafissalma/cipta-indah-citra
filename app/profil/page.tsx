import LayoutDefault from "@/components/LayoutDefault"
import banner from '@/public/banner.png'
import profil from '@/public/profil.png'
import FadeInUp from "@/components/FadeInUp"

const Profil = () => {
    return(
        <LayoutDefault>
            <div 
                style={{ 
                    background: `linear-gradient(to right,rgba(134, 176, 73, 0.8),rgba(202, 255, 212, 0.8)), url(${banner.src})`,
                    height: '40vh',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    position: 'relative',
                }}
                className="text-black text-center flex items-center"
            >
                <div className="w-5/6 mx-auto">
                    <FadeInUp>
                        <h1 className="text-4xl font-bold drop-shadow-lg">PT. Cipta Indah Citra</h1>
                    </FadeInUp>
                    <FadeInUp delay=".4s">
                        <p className="text-xl mt-4 md:w-full lg:w-2/3 mx-auto font-bold drop-shadow-lg">
                            Perusahaan konsultan dengan solusi terpadu: mulai dari desain arsitektur, 
                            Manajemen Konstruksi (MK), Pengkaji Teknis Sertifikat Laik Fungsi (SLF), 
                            hingga sistem mekanikal, elektrikal, dan teknik lingkungan
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
                                Menjadi konsultan total layanan untuk rumah, gedung, maupun area komersial: 
                                mulai dari desain arsitektur dan struktur, Manajemen Konstruksi (MK), 
                                Pengkaji Teknis Sertifikat Laik Fungsi (SLF), hingga perencanaan sistem 
                                mekanikal, elektrikal, dan teknik lingkungan gedung
                            </p>
                        </FadeInUp>
                        <FadeInUp>
                            <p className="mt-4"><b>Bidang</b>: Arsitektur, Struktur, Mekanikal Gedung, Elektrikal Gedung & Teknik Lingkungan</p>
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
                                    cepat, efisien & terintegrasi, serta pemilik bisa tahu progress di ponsel 
                                    Android program BIM-X.
                                </li>
                                <li>
                                    Konsultan Manajemen Konstruksi (MK) mampu menjaga mutu, volume/quantity & 
                                    waktu, serta melakukan review hingga memberikan rekomendasi penerbitan 
                                    Sertifikat Laik Fungsi (SLF) setelah gedung selesai & siap dioperasikan.
                                </li>
                                <li>
                                    Pengkaji Teknis ber-SKA : Arsitek, Struktur, Mekanikal, Elektrikal & Teknik Lingkungan 
                                    untuk memeriksa syarat/ketentuan memperoleh Sertifikat Laik Fungsi (SLF) bagi 
                                    gedung yang sudah ada/lama berdiri.
                                </li>
                                <li>
                                    Perencanaan sistem mekanikal gedung (tata udara, plumbing & proteksi kebakaran), 
                                    elektrikal gedung (instalasi listrik, penerangan & penangkal petir), serta teknik 
                                    lingkungan (air bersih, pengolahan air limbah, drainase & kajian lingkungan) agar 
                                    bangunan aman, nyaman, dan sesuai standar.
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
                            Didukung tenaga ahli lintas disiplin, kami memberikan layanan terbaik dengan profesionalisme 
                            tinggi untuk memenuhi kebutuhan setiap klien
                        </div>
                    </FadeInUp>
                </div>
            </div>
        </LayoutDefault>
    )
}
export default Profil