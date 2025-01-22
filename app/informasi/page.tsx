/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client"

import LayoutDefault from "@/components/LayoutDefault"
import FadeInUp from "@/components/FadeInUp"
import banner from '@/public/banner.png'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Content {
    nodeType: string
    data: {}
    content: { 
        nodeType: string 
        value: string 
        marks: [] 
        data: {} 
        content: any
    }[]
}

interface Fields {
    title: string
    tanggalPublish: string
    foto: {
        sys: {
            type: string
            linkType: string
            id: string
        }
    }
    content: Content
    slug: string
}

interface DataItem {
    fields: Fields
}

const Informasi = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState<boolean>(true)
    const [assets, setAssets] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
            const res = await fetch(
                `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries?content_type=berita`,
                {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
                },
                }
            )
                const data = await res.json()
                setAssets(data.includes?.Asset)
                setItems(data.items)
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                setLoading(false)
            }
        }
    
        fetchData()
    }, [])
    console.log({items})
    const sortedData = items?.sort(
        (a: DataItem, b: DataItem) => new Date(b.fields.tanggalPublish).getTime() - new Date(a.fields.tanggalPublish).getTime()
    )

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
                        <h1 className="text-4xl font-bold drop-shadow-lg">Bangun Wawasan, Kuatkan Konstruksi</h1>
                    </FadeInUp>
                    <FadeInUp delay=".4s">
                        <p className="text-xl mt-4 md:w-full lg:w-2/3 mx-auto font-bold drop-shadow-lg">
                            Temukan informasi terkini, edukasi terpercaya, dan berita terbaru seputar 
                            dunia konstruksi—semua dalam satu tempat
                        </p>
                    </FadeInUp>
                </div>
            </div>
            <section>
                <div className="w-5/6 mx-auto py-16">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                        <FadeInUp delay=".4s">
                        {sortedData.map((item: DataItem, index: number) => {
                            const { title, tanggalPublish, foto, content, slug } = item?.fields

                            const description =
                                `${content?.content?.[0]?.content?.[0]?.value.slice(0,100)}...` || "Deskripsi tidak tersedia.";
                            const asset: any = assets.find(
                                (asset: any) => asset.sys?.id === foto.sys.id
                            );
                            const imageUrl = `https:${asset?.fields?.file?.url}` || '';

                            return (
                                <Link
                                    key={index}
                                    href={`/informasi/${slug}`}
                                    className="hover:shadow-lg cursor-pointer"
                                >
                                    <div className="relative flex flex-col my-6 bg-white shadow-md border border-slate-200 rounded-lg">
                                        <div className="relative h-48 overflow-hidden text-white rounded-t-md">
                                            <Image
                                                src={imageUrl}
                                                alt={title}
                                                fill
                                                objectFit="cover"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h6 className="mb-2 text-slate-600 text-md font-semibold">
                                                {title}
                                            </h6>
                                            <p className="text-slate-600 leading-normal font-light text-justify">
                                                {description}
                                            </p>
                                            <small className="text-slate-400">
                                                {new Date(tanggalPublish).toLocaleDateString("id-ID", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </small>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                        </FadeInUp>
                    </div>
                </div>
            </section>
        </LayoutDefault>
    )
}
export default Informasi