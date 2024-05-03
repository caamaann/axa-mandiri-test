"use client"

import { Button } from "@/components/ui/button"
import { type TPosts } from "@/types/posts"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { DialogPost } from "./DialogPost"
import { DialogDeletePost } from "./DialogDeletePost"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import { apiGetDetailPost } from "../_actions/apiGetDetailPost"
import EmptyState from "@/components/EmptyState"

interface TProps {
  data: TPosts[]
  id: string
}

export default function UserPost({ data, id }: TProps): JSX.Element {
  const router = useRouter()
  const { data: list, refetch } = useQuery({
    queryKey: ["get-user-post", id],
    queryFn: () => apiGetDetailPost({ id }),
    initialData: data,
  })

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
      <div className="mb-4 flex items-center justify-between gap-4">
        <h1 className="text-4xl font-medium">List Post</h1>
        <DialogPost title="Add Post" type="add" refetch={refetch} />
      </div>
      <div className="grid gap-4">
        {list.length > 0 ? (
          list.map((post) => (
            <div key={post.id} className="rounded-xl border p-4 shadow-md">
              <h5 className="text-lg font-medium">{post.title}</h5>
              <p className="text-sm">{post.body}</p>
              <div className="mt-4 flex justify-end gap-4">
                <Link href={`/post/${post.id}`}>
                  <Button>Details</Button>
                </Link>
                <DialogPost
                  title="Edit Post"
                  type="edit"
                  data={post}
                  refetch={refetch}
                />
                <DialogDeletePost id={`${post.id}`} refetch={refetch} />
              </div>
            </div>
          ))
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  )
}
