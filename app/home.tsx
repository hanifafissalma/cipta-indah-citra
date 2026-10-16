"use client"

import LayoutDefault from "@/components/LayoutDefault";
import Whatsapp from "@/configs/icons/Whatsapp";
import bg1 from '@/public/bg-1.png'
import bg2 from '@/public/bg-2.png'
import carousel2 from '@/public/carousel_2.png'
import Link from "next/link";
import Image from "next/image";
import FadeInUp from "@/components/FadeInUp";

const WA_LINK = `https://wa.me/6282125560808?text=${encodeURIComponent(`Halo, saya mau konsultasi dengan PT Cipta Indah Citra`)}`

const BIDANG_KEAHLIAN = [
    {
        icon: "architecture",
        title: "Arsitektur",
        desc: "Perencanaan dan desain bangunan, gambar kerja, hingga pengurusan PBG.",
    },
    {
        icon: "foundation",
        title: "Struktur",
        desc: "Perhitungan dan analisis struktur untuk bangunan yang aman dan kokoh.",
    },
    {
        icon: "hvac",
        title: "Mekanikal Gedung",
        desc: "Tata udara, plumbing, dan sistem proteksi kebakaran gedung.",
    },
    {
        icon: "electrical_services",
        title: "Elektrikal gedung",
        desc: "Instalasi listrik, penerangan, dan sistem penangkal petir gedung.",
    },
    {
        icon: "eco",
        title: "Teknik Lingkungan",
        desc: "Air bersih, pengolahan air limbah, drainase, dan kajian lingkungan.",
    },
]

const HalamanUtama = () => {
    return(
        <LayoutDefault>
            <div 
                style={{ 
                    background: `linear-gradient(to right,rgba(134, 176, 73, 0.6),rgba(202, 255, 212, 0.6)),url(${carousel2.src})`,
                    minHeight: '100vh',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    position: 'relative',
                }}
                className="flex items-center justify-start py-24"
            >
                <div className="w-5/6 mx-auto">
                    <FadeInUp>
                        <p className="text-lg md:text-xl text-white-900 font-semibold mb-3">
                            Berpengalaman sejak 2009
                        </p>
                    </FadeInUp>
                    <FadeInUp delay=".2s">
                        <h1 className="text-3xl md:text-5xl text-black drop-shadow-xl font-bold mb-4 lg:w-4/5 leading-tight">
                            Konsultan Arsitektur, Struktur, Mekanikal Gedung, Elektrikal Gedung &amp; Teknik Lingkungan
                        </h1>
                    </FadeInUp>
                    <FadeInUp delay=".4s">
                        <p className="text-md md:text-xl text-black drop-shadow-xl font-medium mb-6 lg:w-3/4 sm:w-full">
                            Solusi terpadu untuk proyek Anda: mulai dari desain arsitektur, Manajemen Konstruksi (MK), 
                            Sertifikat Laik Fungsi (SLF), hingga sistem mekanikal, elektrikal, dan teknik lingkungan untuk rumah, 
                            gedung, maupun area komersial.
                        </p>
                    </FadeInUp>
                    <FadeInUp delay=".6s">
                        <ul className="flex flex-wrap gap-2 mb-8" aria-label="Bidang keahlian">
                            {BIDANG_KEAHLIAN.map((b) => (
                                <li
                                    key={b.title}
                                    className="flex items-center gap-1 bg-white/80 text-green-900 text-sm md:text-base font-semibold px-3 py-1 rounded-full border border-green-900/30"
                                >
                                    <span className="material-symbols-outlined text-lg" aria-hidden="true">{b.icon}</span>
                                    {b.title}
                                </li>
                            ))}
                        </ul>
                    </FadeInUp>
                    <FadeInUp delay=".8s">
                        <Link 
                            href={WA_LINK}
                            target="_blank"
                            className="font-semibold bg-customYellow text-white text-xl lg:w-2/6 sm:w-full py-4 flex items-center justify-center border-customYellow rounded border hover:shadow-lg"
                        >
                            Konsultasi Sekarang
                        </Link>
                    </FadeInUp>
                </div>
            </div>

            {/* BIDANG KEAHLIAN */}
            <div className="py-16 bg-white">
                <div className="w-5/6 mx-auto">
                    <FadeInUp>
                        <h2 className="font-bold text-3xl md:text-4xl mb-3 text-center">Bidang Keahlian Kami</h2>
                        <p className="text-slate-600 text-lg text-center mx-auto max-w-2xl mb-10">
                            Satu tim konsultan dengan tenaga ahli di setiap disiplin, sehingga perencanaan,
                            pengawasan, dan sertifikasi bangunan Anda ditangani menyeluruh.
                        </p>
                    </FadeInUp>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {BIDANG_KEAHLIAN.map((b, i) => (
                            <FadeInUp key={b.title} delay={`${0.2 + i * 0.15}s`}>
                                <div className="h-full text-center p-6 rounded-lg bg-green-50 border border-green-900/20">
                                    <span className="material-symbols-outlined text-5xl text-green-900" aria-hidden="true">
                                        {b.icon}
                                    </span>
                                    <h3 className="text-xl font-semibold mt-3 mb-2">{b.title}</h3>
                                    <p className="text-slate-600 leading-normal">{b.desc}</p>
                                </div>
                            </FadeInUp>
                        ))}
                    </div>
                </div>
            </div>

            <div className="py-16 bg-green-50">
                <div className="w-3/6 mx-auto">
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2 ">
                        <FadeInUp>
                            <div className="text-center mt-6">
                                <div className="text-5xl font-bold">
                                    <span className="material-symbols-outlined mr-2 text-5xl">
                                        thumb_up
                                    </span>
                                    100%
                                </div>
                                <div className="text-xl mt-6">Hasil Memukau, <br/>Senyum Pelanggan adalah Prioritas Kami</div>
                            </div>
                        </FadeInUp>
                        <FadeInUp delay=".4s">
                            <div className="text-center mt-6">
                                <div className="text-5xl font-bold">
                                    <span className="material-symbols-outlined mr-2 text-5xl">
                                        new_releases
                                    </span>
                                    90%
                                </div>
                                <div className="text-xl mt-6">Prosedur Tepat, <br/>Keberhasilan Jangka Panjang adalah Fokus Kami</div>
                            </div>
                        </FadeInUp>
                    </div>
                    <br/><br/>
                    <FadeInUp delay=".8s">
                        <Link 
                            href={WA_LINK}
                            target="_blank"
                            className="font-semibold bg-customYellow text-white py-2 flex items-center justify-center border-customYellow rounded border hover:shadow-lg"
                        >
                            Konsultasi Sekarang
                        </Link>
                    </FadeInUp>
                </div>
            </div>
            <div>
                <div className="w-5/6 mx-auto py-16">
                    <FadeInUp>
                        <h2 className="font-bold text-4xl mb-3 text-center">Layanan Kami</h2>
                    </FadeInUp>
                    <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-1 gap-4">
                        <FadeInUp delay=".4s">
                            <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                                <div className="relative h-48 overflow-hidden text-white rounded-t-md">
                                    <Image 
                                        src="/3.png"
                                        alt="Design Arsitektur"
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className="p-4 ">
                                    <h3 className="mb-2 text-slate-600 text-xl font-semibold">
                                        Design Arsitektur
                                    </h3>
                                    <p className="text-slate-600 leading-normal font-light text-justify">
                                        Jasa design bangunan, mulai dari konsultasi 
                                        perizinan sampai PBG (Persetujuan Bangunan Gedung)
                                    </p>
                                </div>
                                <div className="px-4 pb-4 pt-0 mt-2 flex justify-end">
                                    <Link href="/design-arsitektur" className="rounded-md bg-white py-2 px-4 border border-green-900 text-center text-sm text-green-900 transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-900 hover:bg-green-900 hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                        Pelajari lebih lanjut
                                    </Link>
                                </div>
                            </div>  
                        </FadeInUp>
                        <FadeInUp delay=".8s">
                            <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                                <div className="relative h-48 overflow-hidden text-white rounded-t-md">
                                    <Image 
                                        src="/4.png"
                                        alt="Manajemen Konstruksi"
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="mb-2 text-slate-600 text-xl font-semibold">
                                        Manajemen Konstruksi
                                    </h3>
                                    <p className="text-slate-600 leading-normal font-light text-justify">
                                        Manajemen dan pengawasan dari awal hingga akhir selama pembangunan berlangsung
                                    </p>
                                </div>
                                <div className="px-4 pb-4 pt-0 mt-2 flex justify-end">
                                    <Link href="/manajemen-konstruksi" className="rounded-md bg-white py-2 px-4 border border-green-900 text-center text-sm text-green-900 transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-900 hover:bg-green-900 hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                        Pelajari lebih lanjut
                                    </Link>
                                </div>
                            </div>  
                        </FadeInUp>
                        <FadeInUp delay="1.2s">
                            <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                                <div className="relative h-48 overflow-hidden text-white rounded-t-md">
                                    <Image 
                                        src="/5.png"
                                        alt="Sertifikat Laik Fungsi"
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="mb-2 text-slate-600 text-xl font-semibold">
                                        Sertifikat Laik Fungsi
                                    </h3>
                                    <p className="text-slate-600 leading-normal font-light text-justify">
                                        Jasa sertifikasi sebagai syarat gedung sebelum dioperasikan atau untuk persyaratan akreditasi
                                    </p>
                                </div>
                                <div className="px-4 pb-4 pt-0 mt-2 flex justify-end">
                                    <Link href="/sertifikasi-laik-fungsi" className="rounded-md bg-white py-2 px-4 border border-green-900 text-center text-sm text-green-900 transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-900 hover:bg-green-900 hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                        Pelajari lebih lanjut
                                    </Link>
                                </div>
                            </div> 
                        </FadeInUp>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center" style={{ background: `linear-gradient( to right, rgba(88, 139, 139, 0.8), rgba(0, 0, 0, 0.5) ),url(${bg1.src})`, width: '100%', minHeight: '400px'}}>
                <div className="w-5/6 mx-auto py-12">
                    <FadeInUp>
                        <h2 className="font-bold text-4xl md:text-5xl mb-3 text-center text-white drop-shadow-md">Kami Hadir untuk Anda</h2>
                    </FadeInUp>
                    <FadeInUp delay=".4s">
                        <p className="font-semibold text-xl md:text-2xl text-center text-white drop-shadow-md">
                            Tenaga ahli arsitektur, struktur, mekanikal, elektrikal, dan teknik lingkungan
                            berkomitmen menghasilkan bangunan yang sesuai standar sertifikasi.
                        </p>
                    </FadeInUp>
                </div>
            </div>
            <div>
                <div className="w-5/6 mx-auto py-16">
                    <FadeInUp>
                        <h2 className="font-bold text-4xl md:text-5xl mb-6 text-center">Kenapa Harus Kami?</h2>
                    </FadeInUp>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 mb-3 mt-6">
                        <FadeInUp delay="0.4s">
                            <div className="bg-white border-green-900 border text-green-900 font-semibold p-4 rounded text-center">
                                <div>
                                    <span className="material-symbols-outlined text-4xl font-bold">
                                        star
                                    </span>
                                </div>
                                Pelayanan Terbaik untuk Kepuasan Anda
                            </div>
                        </FadeInUp>
                        <FadeInUp delay=".8s">
                            <div className="bg-white border-green-900 border text-green-900 font-semibold p-4 rounded text-center">
                                <div>
                                    <span className="material-symbols-outlined text-4xl font-bold">
                                        group
                                    </span>
                                </div>
                                Didukung Tenaga Ahli Lintas Disiplin
                            </div>
                        </FadeInUp>
                        <FadeInUp delay="1.2s">
                            <div className="bg-white border-green-900 border text-green-900 font-semibold p-4 rounded text-center">
                                <div>
                                    <span className="material-symbols-outlined text-4xl font-bold">
                                        check_circle
                                    </span>
                                </div>
                                Mengutamakan Standar dan Kepatuhan
                            </div>
                        </FadeInUp>
                        <FadeInUp delay="1.6s">
                            <div className="bg-white border-green-900 border text-green-900 font-semibold p-4 rounded text-center">
                                <div>
                                    <span className="material-symbols-outlined text-4xl font-bold">
                                        autorenew
                                    </span>
                                </div>
                                Layanan Fleksibel Sesuai Kebutuhan Anda
                            </div>
                        </FadeInUp>
                    </div>
                    <FadeInUp delay="2s">
                        <div className="flex justify-center">
                            <Link 
                                href={WA_LINK}
                                target="_blank"
                                className="mt-16 font-semibold bg-customYellow text-white lg:w-2/3 w-full py-2 flex items-center justify-center border-customYellow rounded border hover:shadow-lg"
                            >
                                Konsultasi Sekarang
                            </Link>
                        </div>
                    </FadeInUp>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center" style={{ background: `linear-gradient( to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.5)),url(${bg2.src})`, width: '100%', minHeight: '400px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className="w-5/6 mx-auto py-12">
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2">
                        <FadeInUp>
                            <h2 className="text-black text-3xl md:text-4xl font-bold drop-shadow-md lg:text-left sm:text-center mb-3">Bangun Impianmu Bersama Kami dengan Standar dan Keunggulan Terbaik</h2>
                        </FadeInUp>
                        <div className="flex flex-col">
                            <FadeInUp delay=".4s">
                                <Link 
                                    href={WA_LINK}
                                    target="_blank"
                                    className="border border-green-900 bg-white rounded py-2 mb-2 lg:w-5/6 sm:w-full flex items-center justify-center text-green-900 hover:bg-green-900 hover:text-white"
                                >
                                    <Whatsapp /><span className="ml-2">Konsultasi via WhatsApp</span>
                                </Link>
                            </FadeInUp>
                            <FadeInUp delay=".8s">
                                <Link 
                                    href="tel:6282125560808" 
                                    className="border border-green-900 bg-white rounded py-2 mb-2 lg:w-5/6 sm:w-full flex items-center justify-center text-green-900 hover:bg-green-900 hover:text-white"
                                >
                                    <span className="material-symbols-outlined">
                                        phone
                                    </span>
                                    <span className="ml-2">Konsultasi via Telepon</span>
                                </Link>
                            </FadeInUp>
                            <FadeInUp delay="1.2s">
                                <Link 
                                    href="mailto:pt.ciptaindahcitraptk@gmail.com" 
                                    className="border border-green-900 bg-white rounded py-2 mb-2 lg:w-5/6 sm:w-full flex items-center justify-center text-green-900 hover:bg-green-900 hover:text-white"
                                >
                                    <span className="material-symbols-outlined">
                                        mail
                                    </span>
                                    <span className="ml-2">Konsultasi via Email</span>
                                </Link>
                            </FadeInUp>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutDefault>
    )
}
export default HalamanUtama
