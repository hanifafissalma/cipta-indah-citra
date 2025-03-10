import LayoutDefault from "@/components/LayoutDefault"
import banner from '@/public/banner.png'
import FadeInUp from "@/components/FadeInUp"
import Image from "next/image"
import Link from "next/link"

const DesignArsitektur = () => {
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
                        <h1 className="text-4xl font-bold drop-shadow-lg">Design Arsitektur</h1>
                    </FadeInUp>
                    <FadeInUp delay=".4s">
                        <p className="text-xl mt-4 md:w-full lg:w-2/3 mx-auto drop-shadow-lg font-bold">
                            Merancang impian Anda menjadi desain yang berfungsi, memenuhi standar, dan menghasilkan gedung yang indah
                        </p>
                    </FadeInUp>
                </div>
            </div>
            <section>
                <div className="w-5/6 mx-auto py-16">
                    <FadeInUp>
                        <div className="grid lg:grid-cols-4 sm: grid-cols-1 gap-8">
                            <div className="relative h-30 overflow-hidden text-white rounded-t-md">
                                <Image
                                    src="/desain-arsitektur-3.png"
                                    alt="desain-arsitektur"
                                    fill
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </div>
                            <div className="col-span-3 text-justify text-slate-600 font-semibold">
                                Layanan Perencanaan/Desain gedung kami berpedoman pada PP 16/2021 dan 
                                mengacu pada Kerangka Acuan Kerja (KAK) dari pemilik proyek. Proses 
                                desain dilakukan oleh tenaga ahli bersertifikat, termasuk arsitek (STRA), 
                                ahli lansekap (SKA), serta ahli konstruksi, geoteknik, elektrikal, 
                                mekanikal, dan teknik lingkungan (SKA). Kami siap memberikan layanan 
                                desain dan konsultasi yang terintegrasi dengan Tim Profesi Ahli (TPA) 
                                di setiap kota dan kabupaten di Indonesia.
                            </div>
                        </div>
                    </FadeInUp>
                </div>
            </section>
            <section className="bg-green-50">
                <div className="w-5/6 mx-auto py-16">
                    <FadeInUp>
                        <center>
                            <div className="text-3xl font-bold mb-4 border-b-2 border-gray-800 inline-block">Tujuan Konsultasi Perencanaan/Design</div>
                        </center>
                    </FadeInUp>
                    <div className="mt-6 grid lg:grid-cols-2 md:grid-cols-1 gap-4">
                        <FadeInUp delay=".8s">
                            <div className="relative flex flex-col bg-white shadow-lg border border-slate-200 rounded-lg h-full">
                            <div className="relative h-48 overflow-hidden text-white rounded-t-md">
                                <Image
                                src="/desain-arsitektur-1.png"
                                alt="card-image"
                                fill
                                objectFit="cover"
                                />
                            </div>
                            <div className="p-4 flex-grow">
                                <p className="text-slate-600 leading-normal text-justify">
                                    Memeriksa kesesuaian perencanaan atau desain untuk memastikan kepatuhan 
                                    terhadap peraturan pusat (UU, PP, Permen, SNI) hingga peraturan daerah 
                                    (PERDA), termasuk Sempadan, KDB, KLB, KDH, dan aturan Kepala Daerah.
                                </p>
                            </div>
                            <div className="px-4 pb-4 pt-0 mt-2 flex justify-end">
                                <Link
                                    href={`https://wa.me/6282125560808?text=${encodeURIComponent(`Halo,saya mau konsultasi dengan PT Cipta Indah Citra`)}`}
                                    className="font-semibold bg-customYellow text-white py-2 px-6 flex items-center justify-center border-customYellow rounded border hover:shadow-lg"
                                >
                                    Konsultasi Sekarang
                                </Link>
                            </div>
                            </div>
                        </FadeInUp>

                        <FadeInUp delay=".4s">
                            <div className="relative flex flex-col bg-white shadow-lg border border-slate-200 rounded-lg h-full">
                            <div className="relative h-48 overflow-hidden text-white rounded-t-md">
                                <Image
                                src="/desain-arsitektur-2.png"
                                alt="card-image"
                                fill
                                objectFit="cover"
                                />
                            </div>
                            <div className="p-4 flex-grow">
                                <p className="text-slate-600 leading-normal text-justify">
                                    Melakukan pemeriksaan agar gedung yang telah dibangun memenuhi syarat laik fungsi, 
                                    mencakup aspek keselamatan, kesehatan, kenyamanan, dan kemudahan, sesuai harapan 
                                    pemilik proyek
                                </p>
                            </div>
                            <div className="px-4 pb-4 pt-0 mt-2 flex justify-end">
                                <Link
                                    href={`https://wa.me/6282125560808?text=${encodeURIComponent(`Halo,saya mau konsultasi dengan PT Cipta Indah Citra`)}`}
                                    className="font-semibold bg-customYellow text-white py-2 px-6 flex items-center justify-center border-customYellow rounded border hover:shadow-lg"
                                >
                                    Konsultasi Sekarang
                                </Link>
                            </div>
                            </div>
                        </FadeInUp>
                        </div>
                </div>
            </section>
            <section>
                <div className="w-5/6 mx-auto py-16">
                    <FadeInUp>
                        <center>
                            <div className="text-4xl font-bold mb-4 border-b-2 border-gray-800 inline-block">Cakupan Layanan Kami</div>
                        </center>
                    </FadeInUp>
                    <div className="md:w-full lg:w-2/3 mx-auto mt-8 text-justify">
                        <FadeInUp>
                            <ol className="custom-list text-justify">
                                <li>
                                    Mempelajari KAK (Kerangka Acuan Kerja) penugasan dari owner atau pemilik proyek
                                </li>
                                <li>
                                    Pengumpulan data sekunder : RDTR, KRK/IRK, PBG, ABD, Perizinan, Tes, Uji & Garansi
                                </li>
                                <li>
                                    Pengumpulan data primer : pengukur situasi dan elevasi, soil investigation dan dokumentasi
                                </li>
                                <li>
                                    Penyusunan Konsep Design / Schematic Design / Pra Design
                                </li>
                                <li>
                                    Pra Design metode BIM (Building Information Building) berupa : Lay Out atau Site Plan dan 
                                    Perspektif atau Gambar 3 dimensi dengan koordinasi tenaga ahli dan konsultasi ke pemilik
                                </li>
                                <li>
                                    Konsultasi design development, multi disiplin : arsitek, finishing, dan sirkulasi
                                </li>
                                <li>
                                    Penentuan struktur, mekanikal, elektrikal, perpipaan dan pendamping estimator
                                </li>
                                <li>
                                    Design render perspektif mata burung dan normal kondisi lansekap, exterior dan interior, 
                                    animasi atau pergerakan andai suasana pagi, siang, sore, dan malam hari
                                </li>
                                <li>
                                    DED, Spek Teknis dan Perhitungan Rencana Anggaran dan Biaya (RAB)
                                </li>
                                <li>
                                    Penyusunan Dokumen Lelang : Gambar DED, Spek Teknis, dan BoQ (Bill of Quantity)
                                </li>
                            </ol>
                            <center>
                                <Link 
                                    href={`https://wa.me/6282125560808?text=${encodeURIComponent(`Halo,saya mau konsultasi dengan PT Cipta Indah Citra`)}`}
                                    className="mt-16 font-semibold font-semibold bg-customYellow text-white lg:w-2/3 sm:w-full py-2 flex items-center justify-center border-customYellow rounded border hover:shadow-lg"
                                >
                                    Konsultasi Sekarang
                                </Link>
                            </center>
                        </FadeInUp>
                    </div>
                </div>
            </section>
        </LayoutDefault>
    )
}
export default DesignArsitektur