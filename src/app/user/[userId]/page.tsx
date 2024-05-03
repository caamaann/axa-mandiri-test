import type { TPosts } from "@/types/posts"
import UserPost from "./_components/UserPostList"

async function getData({ id }: { id: string }): Promise<TPosts[]> {
  const res = await fetch(`${process.env.API_URL}/users/${id}/posts`, {
    next: { revalidate: 3600 },
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return await res.json()
}

export default async function UserPage({
  params: { userId },
}: {
  params: { userId: string }
}): Promise<JSX.Element> {
  const data = await getData({ id: userId })

  return (
    <section className="container max-w-3xl py-8">
      <UserPost data={data} />
    </section>
  )
}
