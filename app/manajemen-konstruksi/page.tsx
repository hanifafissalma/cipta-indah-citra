import LayoutDefault from "@/components/LayoutDefault"
import banner from '@/public/banner.png'
import FadeInUp from "@/components/FadeInUp"
import Image from "next/image"
import Link from "next/link"

const ManajemenKonstruksi = () => {
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
                        <h1 className="text-4xl font-bold">Manajemen Konstruksi</h1>
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
                                    src="/manajemen-konstruksi-3.png"
                                    alt="manajemen-konstruksi"
                                    fill
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </div>
                            <div className="col-span-3 text-justify text-slate-600 font-semibold">
                                <b>Layanan Manajemen Konstruksi dan Pengawasan Pembangunan Gedung</b> yang kami 
                                lakukan berpedoman pada spek teknis dari konsultan perencana yang telah 
                                disetujui pemilik proyek yang dipimpinan oleh:
                                <br/>
                                Team Leader dengan tenaga ahli kami : Arsitek (ber-STRA), Lansekap ber-SKA, 
                                Konstruktur, Geoteknik, Elektrikal, Mekanikal dan Teknik Lingkungan ber-SKA
                            </div>
                        </div>
                    </FadeInUp>
                </div>
            </section>
            <section className="bg-green-50">
                <div className="w-5/6 mx-auto py-16">
                    <FadeInUp>
                        <center>
                            <div className="text-3xl font-bold mb-4 border-b-2 border-gray-800 inline-block">Tujuan Manajemen Konstruksi dan Pengawasan</div>
                        </center>
                    </FadeInUp>
                    <div className="mt-6 grid lg:grid-cols-2 md:grid-cols-1 gap-4">
                        <FadeInUp delay=".8s">
                            <div className="relative flex flex-col bg-white shadow-lg border border-slate-200 rounded-lg h-full">
                            <div className="relative h-48 overflow-hidden text-white rounded-t-md">
                                <Image
                                    src="/manajemen-konstruksi-2.png"
                                    alt="card-image"
                                    fill
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-4 flex-grow">
                                <p className="text-slate-600 leading-normal text-justify">
                                    Melakukan review dokumen perencanaan dan pelaksanaan, serta mengontrol 
                                    kualitas, kuantitas, dan waktu untuk memastikan pekerjaan konstruksi 
                                    berjalan optimal.
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
                                        src="/manajemen-konstruksi-1.png"
                                        alt="card-image"
                                        fill
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="p-4 flex-grow">
                                    <p className="text-slate-600 leading-normal text-justify">
                                        Manajemen dan pengawasan pembangunan gedung agar sesuai mutu, volume 
                                        serta waktu sampai serah terima pertama dan kedua. Apabila sudah 
                                        terbangun, maka syarat laik fungsi dari aspek keselamatan, 
                                        kesehatan, kenyamanan dan kemudahan terpenuhi sesuai harapan pemilik proyek
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
                                    Review Desain : Meninjau desain struktur, mekanikal, elektrikal, teknik lingkungan, dan arsitektur. Memberikan rekomendasi terkait perubahan, penambahan, atau pengurangan.
                                </li>
                                <li>
                                    Rapat Pendahuluan (Pre-Construction Meeting) : 
                                    Menyusun Rencana Mutu Konstruksi (RMK) sesuai kontrak.
                                    Menghitung volume awal berdasarkan kontrak.
                                    Merinci bobot, jadwal kerja, dan timeline proyek.
                                    Membuat roadmap pembangunan gedung dari awal hingga selesai.
                                </li>
                                <li>
                                    Progress Mingguan : Melaporkan kualitas dan kuantitas pekerjaan sesuai jadwal dan target.
                                </li>
                                <li>
                                    Laporan Mingguan : Merangkum laporan bahan, alat, tenaga kerja, dan kondisi cuaca harian.
                                </li>
                                <li>
                                    Laporan Bulanan : Berisi laporan progress bulanan, as-built drawing (ABD), 
                                    curve S, hasil pengujian mutu struktur pondasi, struktur utama, atap, 
                                    serta komponen mekanikal elektrikal (ME).
                                </li>
                                <li>
                                    Berita Acara (BA) Serah Terima Ke-1 : Laporan hasil uji mekanikal, 
                                    elektrikal, dan teknik lingkungan, serta laporan hasil finishing eksterior 
                                    dan interior serta lanskap.
                                </li>
                                <li>
                                    Laporan Akhir & Berita Acara Serah Terima Ke-2 : Mencakup perbaikan cacat 
                                    mutu serta dokumen pemeriksaan dan rekomendasi Syarat Laik Fungsi (SLF).
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
export default ManajemenKonstruksi