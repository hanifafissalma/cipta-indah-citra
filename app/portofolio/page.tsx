/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import LayoutDefault from "@/components/LayoutDefault"
import { useEffect, useState } from "react"
import FadeInUp from "@/components/FadeInUp"
import banner from '@/public/banner.png'
import Slider from "react-slick";
import Modal from "react-modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"

const CustomArrow = ({ className, style, onClick }: any) => (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#588B8B",
        borderRadius: "50%",
        // zIndex: 1,
      }}
      onClick={onClick}
    />
)
const Portofolio = () => {
    const [items, setItems] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [isOpen, setIsOpen] = useState(false); // State untuk popup
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const openModal = (imageUrl: string) => {
        setSelectedImage(imageUrl);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedImage(null);
    };

    const sliderSettings = {
        dots: false,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: <CustomArrow />,
        nextArrow: <CustomArrow />,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    };

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
                setItems(data)
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                setLoading(false)
            }
        }
    
        fetchData()
    }, [])

    const resultData = items?.items?.map((item: any) => {
        const namaProyek = item.fields.namaProyek
        const fotoIds = item.fields.foto.map((foto: any) => foto.sys.id)
      
        const fotoUrls = fotoIds.map((id: string) => {
          const asset = items?.includes.Asset.find((asset: any) => asset.sys.id === id)
          return asset ? `https:${asset.fields.file.url}` : null
        }).filter((url: string) => url !== null)
      
        return {
          namaProyek,
          fotoUrls
        }
      })

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
                        <h1 className="text-4xl font-bold drop-shadow-lg">Jejak Karya</h1>
                    </FadeInUp>
                    <FadeInUp delay=".4s">
                        <p className="text-xl mt-4 md:w-full lg:w-2/3 mx-auto font-bold drop-shadow-lg">
                            Hasilkan Lebih dari Sekadar Visual – Ciptakan Pengalaman
                        </p>
                    </FadeInUp>
                </div>
            </div>
            <section>
                <div className="w-5/6 mx-auto py-16">
                    {resultData?.map((project: any, index: number) => (
                        <div key={index} className="mt-8">
                            <h2 className="text-center font-bold text-2xl">{project.namaProyek}</h2>
                            <Slider {...sliderSettings}>
                                {project.fotoUrls.map((url: string, idx: number) => (
                                    <div key={idx} onClick={() => openModal(url)} className="relative h-60 overflow-hidden text-white">
                                        <Image
                                            src={url}
                                            alt={`Gambar ${idx + 1}`}
                                            fill
                                            objectFit="contain"
                                            className="rounded cursor-pointer mx-3"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    ))}

                    <Modal
                        isOpen={isOpen}
                        onRequestClose={closeModal}
                        contentLabel="Image Modal"
                        ariaHideApp={false}
                        style={{
                            overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
                            content: {
                                top: "50%",
                                left: "50%",
                                right: "auto",
                                bottom: "auto",
                                marginRight: "-50%",
                                transform: "translate(-50%, -50%)",
                                width: "70%"
                            },
                        }}
                    >
                        {selectedImage && (
                            <div>
                                <div className="relative h-80 overflow-hidden p-3 ">
                                    <Image
                                        src={selectedImage}
                                        alt="Selected"
                                        fill
                                        objectFit="contain"
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button onClick={closeModal} className="mt-3 rounded-md bg-white py-2 px-4 border border-green-900 text-center text-sm text-green-900 transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-900 hover:bg-green-900 hover:text-white active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                        Tutup
                                    </button>
                                </div>
                            </div>
                        )}
                    </Modal>
                </div>
            </section>
        </LayoutDefault>
    )
}
export default Portofolio