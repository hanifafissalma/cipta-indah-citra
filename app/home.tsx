"use client"

import LayoutDefault from "@/components/LayoutDefault";
import Whatsapp from "@/configs/icons/Whatsapp";
import bg1 from '@/public/bg-1.png'
import bg2 from '@/public/bg-2.png'
import carousel2 from '@/public/carousel_2.png'
import Link from "next/link";
import Image from "next/image";

const HalamanUtama = () => {
    return(
        <LayoutDefault>
            <div 
                style={{ 
                    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),url(${carousel2.src})`,
                    height: '100vh',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    position: 'relative',
                }}
                className="flex items-center justify-start"
            >
                <div className="w-5/6 mx-auto">
                    <div className="text-5xl text-white drop-shadow-lg font-bold mb-2">Sejak 2009</div>
                    <div className="text-2xl text-white drop-shadow-md font-semibold mb-4 lg:w-3/4 sm:w-full">
                        Berpengalaman mewujudkan desain berkualitas tinggi
                        dengan keahlian dan inovasi yang menjadi solusi
                        arsitektur terbaik untuk Anda.
                    </div>
                    <Link 
                        href="#"
                        className="font-semibold bg-customYellow text-white lg:w-2/6 sm:w-full py-2 flex items-center justify-center border-customYellow rounded border hover:border-customYellow hover:bg-white hover:text-customYellow"
                    >
                        Konsultasi Sekarang
                    </Link>
                </div>
            </div>
            <div className="py-16 bg-green-50">
                <div className="w-3/6 mx-auto">
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2 ">
                        <div className="text-center mt-6">
                            <div className="text-5xl font-bold">
                                <span className="material-symbols-outlined mr-2 text-5xl">
                                    thumb_up
                                </span>
                                100%
                            </div>
                            <div className="text-xl mt-6">Hasil Memukau, <br/>Senyum Pelanggan adalah Prioritas Kami</div>
                        </div>
                        <div className="text-center mt-6">
                            <div className="text-5xl font-bold">
                                <span className="material-symbols-outlined mr-2 text-5xl">
                                    new_releases
                                </span>
                                90%
                            </div>
                            <div className="text-xl mt-6">Prosedur Tepat, <br/>Keberhasilan Jangka Panjang adalah Fokus Kami</div>
                        </div>
                    </div>
                    <br/><br/>
                    <Link 
                        href="#"
                        className="font-semibold bg-customYellow text-white w-full py-2 flex items-center justify-center border-customYellow rounded border hover:border-customYellow hover:bg-white hover:text-customYellow"
                    >
                        Konsultasi Sekarang
                    </Link>
                </div>
            </div>
            <div>
                <div className="w-5/6 mx-auto py-16">
                    <div className="font-bold text-4xl mb-3 text-center">Layanan Kami</div>
                    <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-1 gap-4">
                        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                            <div className="relative h-48 overflow-hidden text-white rounded-t-md">
                                <Image 
                                    src="/3.png"
                                    alt="card-image"
                                    fill
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-4">
                                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                    Desain Arsitektur
                                </h6>
                                <p className="text-slate-600 leading-normal font-light text-justify">
                                    Jasa desain bangunan, mulai dari konsultasi 
                                    perizinan sampai PBG (Persetujuan Bangunan Gedung)
                                </p>
                            </div>
                            <div className="px-4 pb-4 pt-0 mt-2 flex justify-end">
                                <Link href="#" className="rounded-md bg-white py-2 px-4 border border-green-900 text-center text-sm text-green-900 transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-900 hover:bg-green-900 hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    Pelajari lebih lanjut
                                </Link>
                            </div>
                        </div>  
                        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                            <div className="relative h-48 overflow-hidden text-white rounded-t-md">
                                <Image 
                                    src="/4.png"
                                    alt="card-image"
                                    fill
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-4">
                                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                    Manajemen Konstruksi
                                </h6>
                                <p className="text-slate-600 leading-normal font-light text-justify">
                                    Manajemen dan pengawasan dari awal hingga akhir selama pembangunan berlangsung
                                </p>
                            </div>
                            <div className="px-4 pb-4 pt-0 mt-2 flex justify-end">
                                <Link href="#" className="rounded-md bg-white py-2 px-4 border border-green-900 text-center text-sm text-green-900 transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-900 hover:bg-green-900 hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    Pelajari lebih lanjut
                                </Link>
                            </div>
                        </div>  
                        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg">
                            <div className="relative h-48 overflow-hidden text-white rounded-t-md">
                                <Image 
                                    src="/5.png"
                                    alt="card-image"
                                    fill
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-4">
                                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                    Sertifikat Laik Fungsi
                                </h6>
                                <p className="text-slate-600 leading-normal font-light text-justify">
                                    Jasa sertifikat sebagai syarat gedung sebelum dioperasikan atau untuk persyaratan akreditasi
                                </p>
                            </div>
                            <div className="px-4 pb-4 pt-0 mt-2 flex justify-end">
                                <Link href="#" className="rounded-md bg-white py-2 px-4 border border-green-900 text-center text-sm text-green-900 transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-900 hover:bg-green-900 hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    Pelajari lebih lanjut
                                </Link>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center" style={{ background: `linear-gradient( to right, rgba(88, 139, 139, 0.8), rgba(0, 0, 0, 0.5) ),url(${bg1.src})`, width: '100%', height: '400px'}}>
                <div className="w-5/6 mx-auto">
                    <div className="font-bold text-5xl mb-3 text-center text-white drop-shadow-md">Kami Hadir untuk Anda</div>
                    <div className="font-semibold text-2xl text-center text-white drop-shadow-md">
                        Dengan komitmen yang kuat mensukseskan pembangunan agar menghasilkan kualitas bangunan yang sesuai
                        dengan standar sertifikat.
                    </div>
                </div>
            </div>
            <div>
                <div className="w-5/6 mx-auto py-16">
                    <div className="font-bold text-5xl mb-6 text-center">Kenapa Harus Kami?</div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 mb-3 mt-6">
                        <div className="bg-white border-green-900 border text-green-900 font-semibold p-4 rounded text-center">
                            <div>
                                <span className="material-symbols-outlined text-4xl font-bold">
                                    star
                                </span>
                            </div>
                            Pelayanan Terbaik untuk Kepuasan Anda
                        </div>
                        <div className="bg-white border-green-900 border text-green-900 font-semibold p-4 rounded text-center">
                            <div>
                                <span className="material-symbols-outlined text-4xl font-bold">
                                    group
                                </span>
                            </div>
                            Didukung Tim Profesional dan Berpengalaman
                        </div>
                        <div className="bg-white border-green-900 border text-green-900 font-semibold p-4 rounded text-center">
                            <div>
                                <span className="material-symbols-outlined text-4xl font-bold">
                                    check_circle
                                </span>
                            </div>
                            Mengutamakan Standar dan Kepatuhan
                        </div>
                        <div className="bg-white border-green-900 border text-green-900 font-semibold p-4 rounded text-center">
                            <div>
                                <span className="material-symbols-outlined text-4xl font-bold">
                                    autorenew
                                </span>
                            </div>
                            Layanan Fleksibel Sesuai Kebutuhan Anda
                        </div>
                    </div>
                    <center>
                        <Link 
                            href="#"
                            className="mt-16 font-semibold bg-customYellow text-white lg:w-1/2 sm:w-full py-2 flex items-center justify-center border-customYellow rounded border hover:border-customYellow hover:bg-white hover:text-customYellow"
                        >
                            Konsultasi Sekarang
                        </Link>
                    </center>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center" style={{ background: `linear-gradient( to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.5)),url(${bg2.src})`, width: '100%', height: '400px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                <div className="w-5/6 mx-auto">
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2">
                        <div className="text-black text-4xl font-bold drop-shadow-md lg:text-left sm:text-center mb-3">Bangun Impianmu Bersama Kami dengan Standar dan Keunggulan Terbaik</div>
                        <div className="flex flex-col">
                            <Link 
                                href="#" 
                                className="border border-green-900 bg-white rounded py-2 mb-2 lg:w-5/6 sm:w-full flex items-center justify-center text-green-900 hover:bg-green-900 hover:text-white"
                            >
                                <Whatsapp /><span className="ml-2">Konsultasi via WhatsApp</span>
                            </Link>
                            <Link 
                                href="#" 
                                className="border border-green-900 bg-white rounded py-2 mb-2 lg:w-5/6 sm:w-full flex items-center justify-center text-green-900 hover:bg-green-900 hover:text-white"
                            >
                                <span className="material-symbols-outlined">
                                    phone
                                </span>
                                <span className="ml-2">Konsultasi via Telepon</span>
                            </Link>
                            <Link 
                                href="#" 
                                className="border border-green-900 bg-white rounded py-2 mb-2 lg:w-5/6 sm:w-full flex items-center justify-center text-green-900 hover:bg-green-900 hover:text-white"
                            >
                                <span className="material-symbols-outlined">
                                    mail
                                </span>
                                <span className="ml-2">Konsultasi via Form</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutDefault>
    )
}
export default HalamanUtama