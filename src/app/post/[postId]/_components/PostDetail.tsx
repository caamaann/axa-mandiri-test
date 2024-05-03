"use client"

import { Button } from "@/components/ui/button"
import { TComment } from "@/types/comment"
import { TPosts } from "@/types/posts"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { apiGetComment } from "../_actions/apiGetComment"
import { useQuery } from "@tanstack/react-query"
import { DialogComment } from "./DialogComment"
import { DialogDeleteComment } from "./DialogDeleteComment"
import EmptyState from "@/components/EmptyState"

interface TProps {
  data: TPosts
  list: TComment[]
  id: string
}

export default function PostDetail({ data, list, id }: TProps) {
  const router = useRouter()
  const { data: listData, refetch } = useQuery({
    queryKey: ["get-comment", id],
    queryFn: () => apiGetComment({ id }),
    initialData: list,
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
      <div className="mb-4">
        <h1 className="text-4xl font-medium">{data.title}</h1>
      </div>
      <div className="mb-4 flex items-center justify-between">
        <p>List Comment</p>
        <DialogComment title="Add Comment" type="add" refetch={refetch} />
      </div>
      <div className="grid gap-4">
        {listData.length > 0 ? (
          listData.map((comment) => (
            <div key={comment.id} className="rounded-xl border shadow-md">
              <div className="p-4">
                <p className="mb-2 text-xs">
                  <strong>Name:</strong> {comment.name}
                </p>
                <p className="mb-4 text-xs">
                  <strong>Email:</strong> {comment.email}
                </p>
                <p className="text-xs">
                  <strong>Body:</strong> {comment.body}
                </p>
                <div className="mt-4 flex justify-end gap-4">
                  <DialogComment
                    title="Edit Comment"
                    type="edit"
                    data={comment}
                    refetch={refetch}
                  />
                  <DialogDeleteComment id={`${comment.id}`} refetch={refetch} />
                </div>
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
