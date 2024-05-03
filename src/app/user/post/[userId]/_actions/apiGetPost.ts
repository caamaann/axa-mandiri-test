"use server"

import { TPosts } from "@/types/posts"

export async function apiGetPost(): Promise<TPosts[]> {
  const res = await fetch(`${process.env.API_URL}/posts`)
  if (!res.ok) {
    throw new Error("Failed to get data")
  }

  return await res.json()
}
