"use client"

import { Button } from "@/components/ui/button"
import { type TPosts } from "@/types/posts"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { DialogPost } from "./DialogPost"
import { DialogDeletePost } from "./DialogDeletePost"
import Link from "next/link"

interface TProps {
  data: TPosts[]
}

export default function UserPost({ data }: TProps): JSX.Element {
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
      <div className="mb-4 flex flex-col items-center justify-between gap-4 md:flex-row">
        <h1 className="text-4xl font-medium">List Post</h1>
        <DialogPost title="Add Post" type="add" />
      </div>
      <div className="grid gap-4">
        {data.map((post) => (
          <div key={post.id} className="rounded-xl border p-4 shadow-md">
            <h5 className="text-lg font-medium">{post.title}</h5>
            <p className="text-sm">{post.body}</p>
            <div className="mt-4 flex justify-end gap-4">
              <Link href={`/post/${post.id}`}>
                <Button>Details</Button>
              </Link>
              <DialogPost title="Edit Post" type="edit" data={post} />
              <DialogDeletePost id={`${post.id}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
