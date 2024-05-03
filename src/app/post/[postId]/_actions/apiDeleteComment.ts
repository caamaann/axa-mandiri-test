"use server"

export async function apiDeleteComment({ id }: { id: string }) {
  const res = await fetch(`${process.env.API_URL}/comments/${id}`, {
    method: "DELETE",
  })
  if (!res.ok) {
    throw new Error("Failed to delete data")
  }

  return await res.json()
}
