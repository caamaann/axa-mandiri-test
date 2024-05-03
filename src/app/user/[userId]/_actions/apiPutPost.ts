"use server"

import { type TPosts } from "@/types/posts"

export async function apiPutPost(data: TPosts) {
  const res = await fetch(`${process.env.API_URL}/posts/${data.id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
  if (!res.ok) {
    throw new Error("Failed to put data")
  }

  return await res.json()
}
