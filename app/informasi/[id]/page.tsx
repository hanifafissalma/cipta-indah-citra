/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import LayoutDefault from "@/components/LayoutDefault"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS, Document } from "@contentful/rich-text-types"
import Image from "next/image"

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
    content: Document
    slug: string
}

interface DataItem {
    fields: Fields
}

const DetailBerita = () => {
    const pathname = usePathname()
    const [slug, setSlug] = useState<string>('')
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState<boolean>(true)
    const [assets, setAssets] = useState([])
    const options = {
        renderMark: {
          [MARKS.BOLD]: (text: any) => <strong>{text}</strong>,
        },
        renderNode: {
          [BLOCKS.HEADING_1]: (node: any, children: any) => <h1 className="text-4xl font-semibold">{children}</h1>,
          [BLOCKS.HEADING_2]: (node: any, children: any) => <h2 className="text-3xl font-semibold">{children}</h2>,
          [BLOCKS.HEADING_3]: (node: any, children: any) => <h3 className="text-2xl font-semibold">{children}</h3>,
          [BLOCKS.HEADING_4]: (node: any, children: any) => <h4 className="text-xl font-semibold">{children}</h4>,
          [BLOCKS.PARAGRAPH]: (node: any, children: any) => <div className="my-3">{children}</div>,
          [BLOCKS.OL_LIST]: (node: any, children: any) => <ol>{children}</ol>, // Ordered list
          [BLOCKS.UL_LIST]: (node: any, children: any) => <ul>{children}</ul>, // Unordered list
          [BLOCKS.LIST_ITEM]: (node: any, children: any) => <li>{children}</li>,
          [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
            <Image
              src={`https://${node?.data?.target?.fields?.file?.url}`}
              alt={node?.data?.target?.fields?.title}
              fill
            />
          ),
        },
      };
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
                setItems(data.items)
                setAssets(data.includes?.Asset)
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                setLoading(false)
            }
        }
    
        fetchData()
    }, [])

    useEffect(() => {
        const parts = pathname.split("/")
        const slugFromURL = parts[parts.length - 1]
        setSlug(slugFromURL)
    }, [pathname])
    return(
        <LayoutDefault>
            <div className="w-5/6 mx-auto py-16">
                <div className="text-sm">
                    <span>
                        <Link href="/informasi" className="hover:text-green-900">Berita</Link>
                    </span> &gt; {slug}
                </div>
                <div className="mt-6">
                    {items?.filter((d: DataItem) => d.fields?.slug === slug).map((item: DataItem, index: number) => {
                        const { title, tanggalPublish, foto, content } = item?.fields

                        const asset: any = assets.find(
                                (asset: any) => asset.sys?.id === foto.sys.id
                            );
                        const imageUrl = `https:${asset?.fields?.file?.url}` || ''

                        return (
                            <div key={index} className="w-full">
                                
                                <div className="p-4">
                                    <h3 className="mb-2 text-3xl text-md font-bold">
                                        {title}
                                    </h3>
                                    <small className="text-slate-400">
                                        {new Date(tanggalPublish).toLocaleDateString("id-ID", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </small>
                                    <div className="relative h-96 overflow-hidden text-white my-8">
                                        <Image
                                            src={imageUrl}
                                            alt={title}
                                            fill
                                            objectFit="cover"
                                            className="rounded mb-4"
                                        />
                                    </div>
                                    <div className="text-black leading-normal text-justify mb-2">
                                        {documentToReactComponents(content, options)}
                                    </div>
                                    
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </LayoutDefault>
    )
}
export default DetailBerita