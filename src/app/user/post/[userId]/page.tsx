import UserPost from "./_components/UserPostList"
import { apiGetDetailPost } from "./_actions/apiGetDetailPost"

export default async function UserPage({
  params: { userId },
}: {
  params: { userId: string }
}): Promise<JSX.Element> {
  const data = await apiGetDetailPost({ id: userId })

  return (
    <section className="container max-w-3xl py-8">
      <UserPost data={data} id={userId} />
    </section>
  )
}
