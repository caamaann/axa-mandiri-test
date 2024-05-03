"use server"

import { TPosts } from "@/types/posts"

export async function apiGetDetailPost({
  id,
}: {
  id: string
}): Promise<TPosts[]> {
  const res = await fetch(
    `${process.env.API_URL}/users/${id}/posts?_sort=id&_order=desc`
  )
  if (!res.ok) {
    throw new Error("Failed to get data")
  }

  return await res.json()
}
