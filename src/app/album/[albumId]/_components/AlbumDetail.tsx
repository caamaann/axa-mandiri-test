"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { TAlbum } from "@/types/album"
import { TPhoto } from "@/types/photo"
import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { DialogPhoto } from "./DialogPhoto"

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
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-[repeat(auto-fit,minmax(0px,150px))]">
        {list.map((photo) => (
          <div
            key={photo.id}
            className="flex flex-col overflow-hidden rounded-xl border shadow-md"
          >
            <AspectRatio ratio={1 / 1}>
              <Image
                src={photo.thumbnailUrl}
                alt="Logo"
                fill
                style={{
                  objectFit: "cover",
                }}
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </AspectRatio>
            <div className="flex-1 p-4 text-center">
              <p className="text-xs">{photo.title}</p>
            </div>
            <div className="px-4 pb-4">
              <DialogPhoto data={photo} name={data.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
