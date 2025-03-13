"use client"
import LayoutDefault from "@/components/LayoutDefault"
import FadeInUp from "@/components/FadeInUp";
import { useForm, Controller, SubmitHandler } from "react-hook-form"
import banner from '@/public/banner.png'

interface FormData {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
  }

const HubungiKami = () => {
      const { handleSubmit, control, formState: {errors} } = useForm<FormData>({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            service: "Design Arsitektur",
            message: ""
        },
      })
      const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

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
                        <h1 className="text-5xl font-bold drop-shadow-lg">Hubungi Kami</h1>
                    </FadeInUp>
                    <FadeInUp delay=".4s">
                        <p className="text-xl mt-4 drop-shadow-lg font-bold">Kami siap membantu mewujudkan proyek impian Anda</p>
                    </FadeInUp>
                </div>
            </div>
            <div className="w-5/6 mx-auto py-16">
                <section>
                    <FadeInUp delay=".8s">
                        <h2 className="text-2xl font-bold text-center mb-8">Kirim Pesan ke Kami</h2>
                    </FadeInUp>
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
                        <FadeInUp>
                            <div>
                                <form
                                    className="bg-green-50 p-6 rounded shadow"
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <div className="mb-4">
                                        <label className="block font-semibold mb-2">Nama Lengkap</label>
                                        <Controller
                                            name="name"
                                            control={control}
                                            rules={{ required: 'Nama lengkap wajib diisi' }}
                                            render={({ field }) => 
                                                <input
                                                    {...field}
                                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                                                />
                                            }
                                        />
                                        {errors?.name?.message && (
                                            <p className="text-red-500 text-sm mt-1">{errors?.name?.message}</p>
                                        )}
                                    </div>

                                    <div className="mb-4">
                                        <label className="block font-semibold mb-2">Email</label>
                                        <Controller
                                            name="email"
                                            control={control}
                                            rules={{ required: 'Email wajib diisi' }}
                                            render={({ field }) => 
                                                <input
                                                    {...field}
                                                    type="email"
                                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                                                />
                                            }
                                        />
                                        {errors?.email?.message && (
                                            <p className="text-red-500 text-sm mt-1">{errors?.email?.message}</p>
                                        )}
                                    </div>

                                    <div className="mb-4">
                                        <label className="block font-semibold mb-2">Nomor Telepon</label>
                                        <Controller
                                            name="phone"
                                            control={control}
                                            rules={{ required: 'Nomor telepon wajib diisi' }}
                                            render={({ field }) => 
                                                <input
                                                    {...field}
                                                    type="tel"
                                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                                                />
                                            }
                                        />
                                        {errors?.phone?.message && (
                                            <p className="text-red-500 text-sm mt-1">{errors?.phone?.message}</p>
                                        )}
                                    </div>

                                    <div className="mb-4">
                                        <label className="block font-semibold mb-2">Pilih Layanan</label>
                                        <Controller
                                            name="service"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({ field }) => 
                                                <select
                                                    {...field}
                                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                                                >
                                                    <option value="">--Pilih Layanan--</option>
                                                    <option value="Design Arsitektur">Design Arsitektur</option>
                                                    <option value="Manajemen Konstruksi">Manajemen Konstruksi</option>
                                                    <option value="Sertifikat Laik Fungsi">Sertifikat Laik Fungsi</option>
                                                </select>
                                            }
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block font-semibold mb-2">Pesan</label>
                                        <Controller
                                            name="message"
                                            control={control}
                                            rules={{ required: 'Pesan wajib diisi' }}
                                            render={({ field }) => 
                                                <textarea
                                                    {...field}
                                                    rows={4}
                                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                                                />
                                            }
                                        />
                                        {errors?.message?.message && (
                                            <p className="text-red-500 text-sm mt-1">{errors?.message?.message}</p>
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
                        </FadeInUp>
                        <FadeInUp>
                            <div className="flex flex-col bg-green-50 p-6 rounded shadow">
                                <h3 className="text-lg font-bold mb-4">Informasi Kontak</h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td valign="top" style={{width: '20%'}}>Lokasi Kantor</td>
                                            <td valign="top" style={{width: '10%'}}>:</td>
                                            <td valign="top">
                                                {/* <b>Jakarta</b>
                                                <div>Jalan</div>
                                                <br/> */}
                                                <b>Kalimantan Barat</b>
                                                <div>Gg. Mekar No.8, Akcaya, Kec. Pontianak Sel., Kota Pontianak, <br/>Kalimantan Barat 78113</div>
                                            </td>
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
                                {/* <iframe
                                    src="https://maps.google.com/maps?width=600&amp;height=200&amp;hl=en&amp;q=Gg. Mekar No.8, Akcaya, Kec. Pontianak Sel.,Kota Pontianak&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                    width="100%" 
                                    height="100%" 
                                    allowFullScreen 
                                    loading="lazy" 
                                    className="mt-8"
                                /> */}
                            </div>            
                        </FadeInUp>
                    </div>
                </section>
            </div>
        </LayoutDefault>
    )
}
export default HubungiKami