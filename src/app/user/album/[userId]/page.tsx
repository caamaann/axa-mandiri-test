import { notFound } from "next/navigation"
import UserAlbum from "./_components/UserAlbum"
import { TAlbum } from "@/types/album"

async function getData({ id }: { id: string }): Promise<TAlbum[] | undefined> {
  const res = await fetch(`${process.env.API_URL}/users/${id}/albums`, {
    next: { revalidate: 3600 },
  })
  if (!res.ok) return undefined

  return await res.json()
}

export default async function UserPage({
  params: { userId },
}: {
  params: { userId: string }
}) {
  const data = await getData({ id: userId })

  if (!data) {
    return notFound()
  }

  return (
    <section className="container max-w-3xl py-8">
      <UserAlbum data={data} />
    </section>
  )
}
