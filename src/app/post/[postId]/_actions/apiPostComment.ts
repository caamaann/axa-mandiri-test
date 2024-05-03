"use server"

import { TComment } from "@/types/comment"

export async function apiPostComment(data: TComment) {
  const res = await fetch(`${process.env.API_URL}/comments`, {
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
