import Facebook from "@/configs/icons/Facebook";
import Instagram from "@/configs/icons/Instagram";
import Youtube from "@/configs/icons/Youtube";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return(
        <footer className="bg-green-50">
            <div className="flex mx-auto justify-between w-5/6 py-12">
                <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 flex gap-8">
                    <div className="col-span-2">
                        <div className="flex items-start gap-2">
                            <div>
                                <Image
                                    src="/logo.png"
                                    alt="logo"
                                    width={90}
                                    height={90}
                                />
                            </div>
                            <div>
                                <div className="text-md font-bold">PT CIPTA INDAH CITRA</div>
                                <div className="text-xs">Design Arsitektur, Manajemen Konstruksi (MK) & Sertifikasi Laik Fungsi (SLF)</div>
                                <div className="text-xs">Arsitektur, Struktur, Mekanikal, Elektrikal & Teknik Lingkungan</div>
                                <div className="flex flex-row gap-3 mt-2">
                                    <Link href="#"><Facebook/></Link>
                                    <Link href="#"><Instagram/></Link>
                                    <Link href="#"><Youtube/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="font-bold mb-2">Layanan</div>
                        <div className="mb-1">
                            <Link href="/design-arsitektur" className="hover:text-green-900 text-sm">Design Arsitektur</Link>
                        </div>
                        <div className="mb-1">
                            <Link href="/manajemen-konstruksi" className="hover:text-green-900 text-sm">Manajemen Konstruksi</Link>
                        </div>
                        <div className="mb-1">
                            <Link href="/sertifikasi-laik-fungsi" className="hover:text-green-900 text-sm">Sertifikasi Laik Fungsi</Link>
                        </div>
                    </div>
                    <div>
                        <div className="font-bold mb-2">Perusahaan</div>
                        <div className="mb-1">
                            <Link href="/profil" className="hover:text-green-900 text-sm">Profil</Link>
                        </div>
                        <div className="mb-1">
                            <Link href="/portofolio" className="hover:text-green-900 text-sm">Portofolio</Link>
                        </div>
                        <div className="mb-1">
                            <Link href="/pengalaman-konsultan" className="hover:text-green-900 text-sm">Pengalaman Konsultan</Link>
                        </div>
                        <div className="mb-1">
                            <Link href="/informasi" className="hover:text-green-900 text-sm">Informasi</Link>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="font-bold mb-2">Kontak</div>
                        <div className="mb-2 flex flex-row gap-2">
                            <span className="material-symbols-outlined text-green-900">
                                phone
                            </span>
                            <span className="ml-2 text-sm">0821-2556-0808</span>
                        </div>
                        <Link href="mailto:pt.ciptaindahcitraptk@gmail.com" className="mb-2 flex flex-row gap-2 hover:text-green-900">
                            <span className="material-symbols-outlined text-green-900">
                                mail
                            </span>
                            <span className="ml-2 text-sm">pt.ciptaindahcitraptk@gmail.com</span>
                        </Link>
                        <div className="mb-2 flex flex-row gap-2">
                            <span className="material-symbols-outlined text-green-900">
                                location_on
                            </span>
                            <span className="ml-2 text-sm">
                                {/* <b>Jakarta</b>
                                <div>Jalan</div>
                                <br/> */}
                                <b>Kalimantan Barat</b>
                                <div>Gg. Mekar No.8, Akcaya, Kec. Pontianak Sel., Kota Pontianak, Kalimantan Barat 78113</div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-sm text-center">© Copyright {new Date().getFullYear()} PT Cipta Indah Citra. All Rights Reserved.</div>
        </footer>
    )
}
export default Footer