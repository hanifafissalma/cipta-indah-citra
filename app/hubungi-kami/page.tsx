"use client"
import LayoutDefault from "@/components/LayoutDefault"
import banner from '@/public/banner.png'
import { useState } from "react";

interface FormData {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
  }
  
  interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  }
const HubungiKami = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        service: "Desain Arsitektur",
        message: "",
      });
    
      const [errors, setErrors] = useState<FormErrors>({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value,
        })
        const formErrors = validate();
        setErrors(formErrors)
    }
    
    const validate = () => {
        const formErrors: FormErrors = {};
        if (!formData.name) {
          formErrors.name = "Nama lengkap wajib diisi";
        }
        if (!formData.email) {
          formErrors.email = "Email wajib diisi";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          formErrors.email = "Email tidak valid";
        }
        if (!formData.phone) {
          formErrors.phone = "Nomor telepon wajib diisi";
        } else if (!/^[0-9]{10,12}$/.test(formData.phone)) {
          formErrors.phone = "Nomor telepon tidak valid";
        }
        if (!formData.message) {
          formErrors.message = "Pesan wajib diisi";
        }
        return formErrors;
    }
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formErrors = validate();
        setErrors(formErrors);
    
        if (Object.keys(formErrors).length === 0) {
            const phoneNumber = "6281410450656";
            const message = `Hai, saya ${formData.name}, dengan email ${formData.email} dan nomor telepon ${formData.phone}, ingin berkonsultasi terkait ${formData.service}. ${formData.message}`

            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, "_blank");
            setFormData({
                name: "",
                email: "",
                phone: "",
                service: "Desain Arsitektur",
                message: "",
            });
        }
    }

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
                    <h1 className="text-5xl font-bold">Hubungi Kami</h1>
                    <p className="text-xl mt-4">Kami siap membantu mewujudkan proyek impian Anda</p>
                </div>
            </div>
            <div className="w-5/6 mx-auto py-16">
                <section>
                    <h2 className="text-2xl font-bold text-center mb-8">Kirim Pesan ke Kami</h2>
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
                        <div>
                        <form
                            className="bg-green-50 p-6 rounded shadow"
                            onSubmit={handleSubmit}
                        >
                            <div className="mb-4">
                                <label className="block font-semibold mb-2">Nama Lengkap</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="block font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="block font-semibold mb-2">Nomor Telepon</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="block font-semibold mb-2">Pilih Layanan</label>
                                <select
                                    id="service"
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                                    value={formData.service}
                                    onChange={handleInputChange}
                                >
                                    <option value="">--Pilih Layanan--</option>
                                    <option value="Desain Arsitektur">Desain Arsitektur</option>
                                    <option value="Manajemen Konstruksi">Manajemen Konstruksi</option>
                                    <option value="Sertifikat Laik Fungsi">Sertifikat Laik Fungsi</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block font-semibold mb-2">Pesan</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full py-2 bg-green-900 text-white font-semibold rounded hover:bg-green-700 transition"
                            >
                                Kirim Pesan
                            </button>
                            </form>
                        </div>
                        <div className="flex flex-col bg-green-50 p-6 rounded shadow">
                            <h3 className="text-lg font-bold mb-4">Informasi Kontak</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td valign="top" style={{width: '20%'}}>Alamat</td>
                                        <td valign="top" style={{width: '10%'}}>:</td>
                                        <td valign="top">Gg. Mekar No.8, Akcaya, Kec. Pontianak Sel.,Kota Pontianak, Kalimantan Barat 78113</td>
                                    </tr>
                                    <tr>
                                        <td valign="top">Email</td>
                                        <td valign="top">:</td>
                                        <td valign="top">pt.ciptaindahcitraptk@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td valign="top">Telepon</td>
                                        <td valign="top">:</td>
                                        <td valign="top">0821-2566-0808</td>
                                    </tr>
                                </tbody>
                            </table>
                            <iframe
                                src="https://maps.google.com/maps?width=600&amp;height=200&amp;hl=en&amp;q=Gg. Mekar No.8, Akcaya, Kec. Pontianak Sel.,Kota Pontianak&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                width="100%" 
                                height="100%" 
                                allowFullScreen 
                                loading="lazy" 
                                className="mt-8"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </LayoutDefault>
    )
}
export default HubungiKami