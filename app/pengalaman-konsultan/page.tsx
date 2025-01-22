/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import LayoutDefault from "@/components/LayoutDefault"
import { Fragment, useEffect, useState } from "react"
import banner from '@/public/banner.png'
import FadeInUp from "@/components/FadeInUp"

interface DataItems {
    fields: {
        namaPekerjaan: string 
        namaPemberiKerja: string 
        alamatPemberiKerja: string 
        jenisService: string
        tahun: string
    }
}

const PengalamanKonsultan = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState<boolean>(true)
    const [optionChoosen, setOptionChoosen] = useState<string>('design')

    useEffect(() => {
        const fetchData = async () => {
          setLoading(true)
          try {
            const res = await fetch(
              `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries?content_type=pengalamanKonsultan`,
              {
                headers: {
                  Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
                },
              }
            )
            const data = await res.json()
            setItems(data.items)
          } catch (error) {
            console.error('Error fetching data:', error)
          } finally {
            setLoading(false)
          }
        }
    
        fetchData()
    }, [])

    const filteredData = items?.filter((item: DataItems) => item?.fields?.jenisService === optionChoosen)
    const groupedData = filteredData.reduce((acc: any, item:DataItems) => {
        const { tahun } = item.fields
        if (!acc[tahun]) acc[tahun] = []
        acc[tahun].push(item.fields)
        return acc
      }, {})
    
    const sortedYears = Object.keys(groupedData).sort((a, b) => Number(b) - Number(a))
    console.log({items, loading})
    
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
                        <h1 className="text-4xl font-bold drop-shadow-lg">Menciptakan Solusi, Membentuk Pengalaman</h1>
                    </FadeInUp>
                    <FadeInUp delay=".4s">
                        <p className="text-xl mt-4 md:w-full lg:w-2/3 mx-auto font-bold drop-shadow-lg">
                            Telusuri berbagai proyek yang telah kami selesaikan dengan dedikasi dan keahlian untuk membantu klien mencapai tujuan mereka
                        </p>
                    </FadeInUp>
                </div>
            </div>
            <section>
                <div className="w-5/6 mx-auto pt-16 pb-8">
                    <FadeInUp>
                        <div className="mb-4">
                            <label className="block font-semibold mb-2">Pilih Layanan</label>
                            <select
                                className="px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-green-300"
                                value={optionChoosen}
                                onChange={(e) => setOptionChoosen(e.target.value)}
                            >
                                <option value="">--Pilih Layanan--</option>
                                <option value="design">Design Arsitektur</option>
                                <option value="konstruksi">Manajemen Konstruksi</option>
                                <option value="slf">Sertifikat Laik Fungsi</option>
                            </select>
                        </div>
                    </FadeInUp>
                </div>
            </section>
            <section>
                <div className="w-5/6 mx-auto pb-16">
                    <FadeInUp>
                        <center>
                            <div className="text-4xl font-bold mb-6 border-b-2 border-gray-800 inline-block">{optionChoosen === 'design' ? 'Perencanaan/Design' : optionChoosen === 'konstruksi' ? 'Manajemen Konstruksi & Pengawasan' : 'Pengkaji Teknis & Audit'}</div>
                        </center>
                    </FadeInUp>
                    <FadeInUp>
                        <div className="overflow-x-auto">
                            <table border={1} className="border-collapse min-w-full">
                                <thead>
                                    <tr style={{ backgroundColor: "#5b8a72", color: "white" }}>
                                        <th className="p-2">Nama Pekerjaan</th>
                                        <th className="p-2">Nama Pemberi Tugas</th>
                                        <th className="p-2">Alamat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {sortedYears.map((year) => (
                                    <Fragment key={year}>
                                        <tr style={{ backgroundColor: "#f4a261", color: "white" }}>
                                            <td colSpan={3} className="text-center p-2 font-bold">
                                                {year}
                                            </td>
                                        </tr>
                                        {groupedData[year].map((item: any, index: number) => (
                                            <tr key={index} className="border-t-2 p-4">
                                                <td className="p-2">{item.namaPekerjaan}</td>
                                                <td className="border-l-2 border-r-2 p-2">{item.namaPemberiKerja}</td>
                                                <td className="p-2">{item.alamatPemberiKerja}</td>
                                            </tr>
                                        ))}
                                    </Fragment>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </FadeInUp>
                </div>
            </section>
        </LayoutDefault>
    )
}
export default PengalamanKonsultan