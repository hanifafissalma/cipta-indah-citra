import LayoutDefault from "@/components/LayoutDefault"
import banner from '@/public/banner.png'
import FadeInUp from "@/components/FadeInUp"
import Image from "next/image"
import Link from "next/link"

const sertifikasiLaikFungsi = () => {
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
                        <h1 className="text-4xl font-bold">Sertifikasi Laik Fungsi</h1>
                    </FadeInUp>
                    <FadeInUp delay=".4s">
                        <p className="text-xl mt-4 md:w-full lg:w-2/3 mx-auto">
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
                                    src="/sertifikasi-laik-fungsi-3.png"
                                    alt="slf"
                                    fill
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </div>
                            <div className="col-span-3 text-justify text-slate-600 font-semibold">
                                <b>Layanan Sertifikasi Laik Fungsi</b> yang kami lakukan berpedoman 
                                dengan PP 16/2021 dan aplikasi SIMBG, untuk masing-masing fungsi gedung, 
                                ketinggian dan umur gedung menggunakan daftar simak yang berbeda-beda 
                                disesuaikan dengan fungsi gedung, kelengkapan data dan legalitas 
                                gedung seperti dalam lampiran PP 16/202.
                            </div>
                        </div>
                    </FadeInUp>
                </div>
            </section>
            <section className="bg-green-50">
                <div className="w-5/6 mx-auto py-16">
                    <FadeInUp>
                        <center>
                            <div className="text-3xl font-bold mb-4 border-b-2 border-gray-800 inline-block">Tujuan Sertifikasi Laik Fungsi</div>
                        </center>
                    </FadeInUp>
                    <div className="mt-6 grid lg:grid-cols-2 md:grid-cols-1 gap-4">
                        <FadeInUp delay=".8s">
                            <div className="relative flex flex-col bg-white shadow-lg border border-slate-200 rounded-lg h-full">
                            <div className="relative h-48 overflow-hidden text-white rounded-t-md">
                                <Image
                                    src="/sertifikasi-laik-fungsi-2.png"
                                    alt="card-image"
                                    fill
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-4 flex-grow">
                                <p className="text-slate-600 leading-normal text-justify">
                                    Pemeriksaan kesesuaian lapangan dengan ABD (gambar terbangun), IMB dan Gambar IMB
                                </p>
                            </div>
                            <div className="px-4 pb-4 pt-0 mt-2 flex justify-end">
                                <Link
                                    href="#"
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
                                        src="/sertifikasi-laik-fungsi-1.png"
                                        alt="card-image"
                                        fill
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="p-4 flex-grow">
                                    <p className="text-slate-600 leading-normal text-justify">
                                        Pemeriksaan syarat laik fungsi dari aspek keselamatan, kesehatan, 
                                        kenyamanan dan kemudahan
                                    </p>
                                </div>
                                <div className="px-4 pb-4 pt-0 mt-2 flex justify-end">
                                    <Link
                                        href="#"
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
                                    Mengumpulkan data sekunder seperti IMB/PBG, ABD, perizinan/legalitas, tes, dan commissioning, dimana
                                    Pemilik Gedung menyiapkan dokumen administrasi dan Pengkaji teknis menyiapkan dokumen SLF atau pemeriksaan lapangan.
                                </li>
                                <li>
                                    Melakukan pemeriksaan kondisi lapangan untuk mencocokkan ABD, legalitas, dan perizinan dengan keadaan 
                                    aktual, serta memeriksa aspek bangunan meliputi:
                                    Keselamatan (Struktur, proteksi kebakaran, kelistrikan, dan penangkal petir), 
                                    Kesehatan (Air bersih, limbah cair/padat, pencahayaan, dan ventilasi),
                                    Kenyamanan (Kondisi udara, kebisingan, dan aksesibilitas), dan 
                                    Kemudahan (Sarana/prasarana untuk mobilitas horizontal dan vertikal)
                                </li>
                                <li>
                                    Berkonsultasi dengan pemilik gedung jika ditemukan syarat yang belum terpenuhi, 
                                    disertai langkah tindak lanjut.
                                </li>
                                <li>
                                    Mengisi daftar simak dan menyusun dokumen seperti IMB/PBG, ABD, dokumen uji, 
                                    tes & commissioning, serta foto lapangan.
                                </li>
                                <li>
                                    Membuat berita acara pemeriksaan, rekomendasi, dan komitmen yang diperlukan 
                                    untuk memenuhi syarat laik fungsi.
                                </li>
                                <li>
                                    Pengkaji teknis mempresentasikan hasil kepada pihak terkait dan 
                                    menandatangani Surat Pernyataan Laik Fungsi dengan meterai.
                                </li>
                            </ol>
                            <center>
                                <Link 
                                    href="#"
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
export default sertifikasiLaikFungsi