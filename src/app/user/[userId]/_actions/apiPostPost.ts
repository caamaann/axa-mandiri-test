"use server"

import { type TPosts } from "@/types/posts"

export async function apiPostPost(data: TPosts) {
  const res = await fetch(`${process.env.API_URL}/posts`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
  if (!res.ok) {
    throw new Error("Failed to post data")
  }

  return await res.json()
}
