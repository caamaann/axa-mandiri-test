import { TAlbum } from "@/types/album"
import { TPhoto } from "@/types/photo"
import AlbumDetail from "./_components/AlbumDetail"

interface TAlbumDetail extends TAlbum {
  photos: TPhoto[]
}

async function getData({ id }: { id: string }): Promise<TAlbumDetail> {
  const res = await fetch(`${process.env.API_URL}/albums/${id}?_embed=photos`, {
    next: { revalidate: 3600 },
  })
  if (!res.ok) return undefined

  return await res.json()
}

export default async function UserPage({
  params: { albumId },
}: {
  params: { albumId: string }
}) {
  const data = await getData({ id: albumId })

  return (
    <section className="container max-w-3xl py-8">
      <AlbumDetail data={data} list={data.photos} />
    </section>
  )
}
