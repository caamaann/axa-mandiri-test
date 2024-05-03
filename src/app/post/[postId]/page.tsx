import PostDetail from "./_components/PostDetail"
import { TPosts } from "@/types/posts"
import { apiGetComment } from "./_actions/apiGetComment"

async function getData({ id }: { id: string }): Promise<TPosts> {
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

  return (
    <section className="container max-w-3xl py-8">
      <PostDetail data={data} list={list} id={postId} />
    </section>
  )
}
