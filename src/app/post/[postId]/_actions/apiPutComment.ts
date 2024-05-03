"use server"

import { TComment } from "@/types/comment"

export async function apiPutComment(data: TComment) {
  const res = await fetch(`${process.env.API_URL}/comments/${data.id}`, {
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
