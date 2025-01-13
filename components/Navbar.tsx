import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import Menu from "@/configs/icons/Menu";
import Close from "@/configs/icons/Close";
import ArrowDropDown from "@/configs/icons/ArrowDropDown";
import ArrowDropUp from "@/configs/icons/ArrowDropUp";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [showSubMenu, setShowSubMenu] = useState(false)
    const [showMobileSubmenu, setShowMobileSubmenu] = useState(false)
    return(
        <nav>
            <div className="max-w-7xl mx-auto shadow-sm">
                <div className="flex mx-auto justify-between w-5/6 ">
                    <div className="flex items-center gap-16 h-[80px]">
                        <div>
                            <Link
                                href="/"
                                className="flex gap-1 font-bold text-gray-700 items-center "
                                >
                                <Image 
                                    src="/logo_landscape.png"
                                    alt="logo_landscape"
                                    width={200}
                                    height={30}
                                />
                            </Link>
                        </div>
                        <div className="hidden lg:flex h-full lg:items-center">
                            <Link 
                                href="#" 
                                className="hover:bg-green-900 hover:text-white text-center transition-colors duration-300 flex items-center justify-center h-full px-4 font-semibold text-green-900"
                            >
                                Home
                            </Link>
                            <div
                                className="relative group h-full"
                                // onMouseEnter={() => setShowSubMenu(true)}
                                // onMouseLeave={() => setShowSubMenu(false)}
                            >
                                <Link
                                    href="#"
                                    onClick={() => setShowSubMenu(!showSubMenu)}
                                    className="hover:bg-green-900 hover:text-white text-center transition-colors duration-300 flex items-center justify-center h-full px-4 font-semibold text-green-900"
                                >
                                    Layanan <span className="ml-2">{showSubMenu ? <ArrowDropUp color='#FFFFFF'/> : <ArrowDropDown color='#588B8B'/>}</span>
                                </Link>
                                {/* Submenu */}
                                <div
                                    className={`absolute left-0 mt-2 bg-white shadow-lg border rounded-md transition-opacity duration-300 ${
                                        showSubMenu ? "opacity-100 visible" : "opacity-0 invisible"
                                    }`}
                                >
                                    <Link
                                        href="#"
                                        className="block px-4 py-2 text-green-900 hover:bg-green-900 hover:text-white"
                                    >
                                        Desain Arsitektur
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block px-4 py-2 text-green-900 hover:bg-green-900 hover:text-white"
                                    >
                                        Manajemen Konstruksi
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block px-4 py-2 text-green-900 hover:bg-green-900 hover:text-white"
                                    >
                                        Sertifikat Laik Fungsi
                                    </Link>
                                </div>
                                </div>
                            <Link 
                                href="#" 
                                className="hover:bg-green-900 hover:text-white text-center transition-colors duration-300 flex items-center justify-center h-full px-4 font-semibold text-green-900"
                            >
                                Profil
                            </Link>
                            <Link 
                                href="#" 
                                className="hover:bg-green-900 hover:text-white text-center transition-colors duration-300 flex items-center justify-center h-full px-4 font-semibold text-green-900"
                            >
                                Portofolio
                            </Link>
                            <Link 
                                href="#" 
                                className="hover:bg-green-900 hover:text-white text-center transition-colors duration-300 flex items-center justify-center h-full px-4 font-semibold text-green-900"
                            >
                                Berita
                            </Link>
                            <Link 
                                href="#" 
                                className="hover:bg-green-900 hover:text-white text-center transition-colors duration-300 flex items-center justify-center h-full px-4 font-semibold text-green-900"
                            >
                                Hubungi Kami
                            </Link>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="lg:hidden flex items-center">
                            <button onClick={() => setToggleMenu(!toggleMenu)}>
                                {toggleMenu ? <Close/> : <Menu />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
            className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
                !toggleMenu ? "h-0" : "h-auto"
            }`}
            >
                <div className="px-8">
                    <div className="flex flex-col font-bold tracking-wider">
                        <div className="flex flex-col">
                            <button
                                className="block px-4 py-2 text-green-900 hover:bg-green-900 hover:text-white flex justify-between items-center w-full"
                                onClick={() => setShowMobileSubmenu(!showMobileSubmenu)}
                            >
                                <span>Layanan</span>
                                <span>{showMobileSubmenu ? "-" : "+"}</span>
                            </button>
                            {showMobileSubmenu && (
                                <div className="flex flex-col pl-6">
                                    <Link
                                        href="#"
                                        className="block px-4 py-2 text-green-900 hover:bg-green-900 hover:text-white"
                                    >
                                        Desain Arsitektur
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block px-4 py-2 text-green-900 hover:bg-green-900 hover:text-white"
                                    >
                                        Manajemen Konstruksi
                                    </Link>
                                    <Link
                                        href="#"
                                        className="block px-4 py-2 text-green-900 hover:bg-green-900 hover:text-white"
                                    >
                                        Sertifikat Laik Fungsi
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link href="#" className="block px-4 py-2 text-green-900 hover:bg-green-900 hover:text-white flex justify-between items-center w-full">Pricing</Link>
                        <Link href="#" className="block px-4 py-2 text-green-900 hover:bg-green-900 hover:text-white flex justify-between items-center w-full">Download</Link>
                        <Link href="#" className="block px-4 py-2 text-green-900 hover:bg-green-900 hover:text-white flex justify-between items-center w-full">Classic</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar