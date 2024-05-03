"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { TAlbum } from "@/types/album"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"

interface TProps {
  data: TAlbum[]
}

export default function UserAlbum({ data }: TProps) {
  const router = useRouter()
  return (
    <div>
      <Button
        variant={"outline"}
        className="mb-4"
        onClick={() => {
          router.back()
        }}
      >
        <ChevronLeft /> Back
      </Button>
      <div className="mb-4">
        <h1 className="text-4xl font-medium">List Album</h1>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        {data.map((album) => (
          <Link
            href={`/album/${album.id}`}
            key={album.id}
            className="overflow-hidden rounded-xl border shadow-md"
          >
            <AspectRatio ratio={16 / 9}>
              <Image
                src={`https://ui-avatars.com/api/?name=${album.title}&background=random&size=256&font-size=0.1`}
                alt="Logo"
                fill
                style={{
                  objectFit: "cover",
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </AspectRatio>
            <div className="p-4 text-center">
              <h5 className="font-medium">{album.title}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
