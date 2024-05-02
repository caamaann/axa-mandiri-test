import type { TUser } from "@/types/user"
import Image from "next/image"
import Link from "next/link"

async function getData(): Promise<TUser[]> {
  const res = await fetch(process.env.API_URL + "/users", {
    next: { revalidate: 3600 },
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return await res.json()
}

export default async function IndexPage(): Promise<JSX.Element> {
  const data = await getData()

  return (
    <section className="container py-8">
      <h1 className="mb-4 text-4xl font-medium">List User</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 ">
        {data.map((user) => (
          <Link
            href={`/user/${user.id}`}
            key={user.id}
            className="rounded-xl border p-4 text-center shadow-md"
          >
            <Image
              src={`https://ui-avatars.com/api/?name=${user.name}&background=random&rounded=true`}
              width={55}
              height={55}
              alt="Logo"
              className="mx-auto mb-4"
            />
            <p className="text-sm">{user.name}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}