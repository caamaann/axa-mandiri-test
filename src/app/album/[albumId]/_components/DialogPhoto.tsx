"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { TPhoto } from "@/types/photo"
import Image from "next/image"

interface TProps {
  data: TPhoto
  name: string
}

export function DialogPhoto({ data, name }: TProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full">
          See Detail
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Photo Detail</DialogTitle>
        </DialogHeader>
        <div>
          <AspectRatio ratio={1 / 1} className="mb-4">
            <Image
              src={data.url}
              alt="Logo"
              fill
              style={{
                objectFit: "cover",
              }}
              quality={100}
              sizes="50vw"
            />
          </AspectRatio>
          <div className="grid grid-cols-[80px_1fr] gap-x-4 gap-y-2 text-xs">
            <p className="font-medium">Album Id</p>
            <p>{data.albumId}</p>
            <p className="font-medium">Album Name</p>
            <p>{name}</p>
            <p className="font-medium">Id</p>
            <p>{data.id}</p>
            <p className="font-medium">Title</p>
            <p>{data.title}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
