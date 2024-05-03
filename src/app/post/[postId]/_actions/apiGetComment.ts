"use server"

import { TComment } from "@/types/comment"

export async function apiGetComment({
  id,
}: {
  id: string
}): Promise<TComment[]> {
  const res = await fetch(
    `${process.env.API_URL}/posts/${id}/comments?_sort=id&_order=desc`
  )
  if (!res.ok) {
    throw new Error("Failed to get data")
  }

  return await res.json()
}
