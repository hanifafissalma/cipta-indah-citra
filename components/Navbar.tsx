"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import { usePathname } from "next/navigation"

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [showSubMenu, setShowSubMenu] = useState(false)
    const [showMobileSubmenu, setShowMobileSubmenu] = useState(false)
    const pathname = usePathname()
    return(
        <nav className="fixed top-0 z-50 bg-white w-full">
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
                            <div
                                className="relative group h-full"
                            >
                                <Link
                                    href="#"
                                    onClick={() => setShowSubMenu(!showSubMenu)}
                                    className="hover:bg-green-900 hover:text-white text-center transition-colors duration-300 flex items-center justify-center h-full px-4 font-semibold text-green-900"
                                >
                                    Layanan 
                                    <span className="ml-2">
                                        {showSubMenu ? 
                                            <span className="material-symbols-outlined mt-1">arrow_drop_up</span> 
                                            : 
                                            <span className="material-symbols-outlined mt-1">arrow_drop_down</span>
                                        }
                                    </span>
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
                                href="/profil" 
                                className={`hover:bg-green-900 hover:text-white text-center transition-colors duration-300 flex items-center justify-center h-full px-4 font-semibold ${pathname === '/profil' ? 'bg-green-900 text-white' : 'text-green-900 bg-white'}`}
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
                                href="/hubungi-kami" 
                                className={`hover:bg-green-900 hover:text-white text-center transition-colors duration-300 flex items-center justify-center h-full px-4 font-semibold ${pathname === '/hubungi-kami' ? 'bg-green-900 text-white' : 'text-green-900 bg-white'}`}
                            >
                                Hubungi Kami
                            </Link>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="lg:hidden flex items-center">
                            <button onClick={() => setToggleMenu(!toggleMenu)}>
                                {toggleMenu ? 
                                    <span className="material-symbols-outlined">close</span> 
                                    : 
                                    <span className="material-symbols-outlined">menu</span> 
                                }
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
                        <Link href="/profil" className="block px-4 py-2 text-green-900 hover:bg-green-900 hover:text-white flex justify-between items-center w-full">Profil</Link>
                        <Link href="#" className="block px-4 py-2 text-green-900 hover:bg-green-900 hover:text-white flex justify-between items-center w-full">Portofolio</Link>
                        <Link href="#" className="block px-4 py-2 text-green-900 hover:bg-green-900 hover:text-white flex justify-between items-center w-full">Berita</Link>
                        <Link href="/hubungi-kami" className="block px-4 py-2 text-green-900 hover:bg-green-900 hover:text-white flex justify-between items-center w-full">Hubungi Kami</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar