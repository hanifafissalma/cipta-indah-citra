/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import LayoutDefault from "@/components/LayoutDefault"
import { useEffect, useState } from "react"
import FadeInUp from "@/components/FadeInUp"
import banner from '@/public/banner.png'

const Portofolio = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
            const res = await fetch(
                `https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/entries?content_type=portofolio`,
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
    console.log({items,loading})
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
                    <FadeInUp>
                        <h1 className="text-4xl font-bold">Jejak Karya</h1>
                    </FadeInUp>
                    <FadeInUp delay=".4s">
                        <p className="text-xl mt-4 md:w-full lg:w-2/3 mx-auto">
                        Hasilkan Lebih dari Sekadar Visual – Ciptakan Pengalaman
                        </p>
                    </FadeInUp>
                </div>
            </div>
            <section>
                <div className="w-5/6 max-auto py-16">
                    <div className="text-center font-bold text-xl">Judul</div>
                </div>
            </section>
        </LayoutDefault>
    )
}
export default Portofolio