"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { TAlbum } from "@/types/album"
import { TPhoto } from "@/types/photo"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface TProps {
  data: TAlbum
  list: TPhoto[]
}

export default function AlbumDetail({ data, list }: TProps) {
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
        <h1 className="text-4xl font-medium">Album {data.title}</h1>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(0px,150px))] gap-4">
        {list.map((photo) => (
          <div
            key={photo.id}
            className="overflow-hidden rounded-xl border shadow-md"
          >
            <AspectRatio ratio={1 / 1}>
              <Image
                src={photo.thumbnailUrl}
                alt="Logo"
                fill
                objectFit="cover"
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </AspectRatio>
            <div className="p-4 text-center">
              <p className="text-xs">{photo.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
