import Facebook from "@/configs/icons/Facebook";
import Instagram from "@/configs/icons/Instagram";
import Location from "@/configs/icons/Location";
import Mail from "@/configs/icons/Mail";
import Phone from "@/configs/icons/Phone";
import Youtube from "@/configs/icons/Youtube";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return(
        <footer className="flex mx-auto justify-between w-5/6 py-12 bg-white">
            <div className="grid md:grid-cols-6 sm:grid-cols-2 lg:grid-cols-6 flex items-center gap-8">
                <div className="col-span-2">
                    <div className="flex items-start gap-2">
                        <div>
                            <Image
                                src="/logo.png"
                                alt="logo"
                                width={90}
                                height={90}
                                className="mt-3"
                            />
                        </div>
                        <div>
                            <div className="text-md font-bold">PT CIPTA INDAH CITRA</div>
                            <div className="text-xs">Desain Arsitektur, Manajemen Konstruksi (MK) & Pengkaji Sertifikat Laik Fungsi (SLF)</div>
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
                        <Link href="#" className="hover:text-green-900 hover:font-semibold text-sm">Desain Arsitektur</Link>
                    </div>
                    <div className="mb-1">
                        <Link href="#" className="hover:text-green-900 hover:font-semibold text-sm">Manajemen Konstruksi</Link>
                    </div>
                    <div className="mb-1">
                        <Link href="#" className="hover:text-green-900 hover:font-semibold text-sm">Sertifikat Laik Fungsi</Link>
                    </div>
                </div>
                <div>
                    <div className="font-bold mb-2">Perusahaan</div>
                    <div className="mb-1">
                        <Link href="#" className="hover:text-green-900 hover:font-semibold text-sm">Profil</Link>
                    </div>
                    <div className="mb-1">
                        <Link href="#" className="hover:text-green-900 hover:font-semibold text-sm">Portofolio</Link>
                    </div>
                    <div className="mb-1">
                        <Link href="#" className="hover:text-green-900 hover:font-semibold text-sm">Berita</Link>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="font-bold mb-2">Kontak</div>
                    <div className="mb-2 flex flex-row gap-2">
                        <Phone />
                        <span className="ml-2 text-sm">0821-2566-0808</span>
                    </div>
                    <div className="mb-2 flex flex-row gap-2">
                        <Mail />
                        <span className="ml-2 text-sm">pt.ciptaindahcitraptk@gmail.com</span>
                    </div>
                    <div className="mb-2 flex flex-row gap-2">
                        <Location />
                        <span className="ml-2 text-sm">Gg. Mekar No.8, Akcaya, Kec. Pontianak Sel.,<br/>
                        Kota Pontianak, Kalimantan Barat 78113</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer