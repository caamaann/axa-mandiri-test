import PostDetail from "./_components/PostDetail"
import { TPosts } from "@/types/posts"
import { apiGetComment } from "./_actions/apiGetComment"
import { notFound } from "next/navigation"

async function getData({ id }: { id: string }): Promise<TPosts | undefined> {
  const res = await fetch(`${process.env.API_URL}/posts/${id}`, {
    next: { revalidate: 3600 },
  })
  if (!res.ok) return undefined

  return await res.json()
}

export default async function UserPage({
  params: { postId },
}: {
  params: { postId: string }
}) {
  const data = await getData({ id: postId })
  const list = await apiGetComment({ id: postId })

  if (!data || !list) {
    return notFound()
  }

  return (
    <section className="container max-w-3xl py-8">
      <PostDetail data={data} list={list} id={postId} />
    </section>
  )
}
