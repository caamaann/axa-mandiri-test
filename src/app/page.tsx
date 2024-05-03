import { Button } from "@/components/ui/button"
import type { TUser } from "@/types/user"
import Image from "next/image"
import Link from "next/link"

async function getData(): Promise<TUser[] | undefined> {
  const res = await fetch(process.env.API_URL + "/users", {
    next: { revalidate: 3600 },
  })
  if (!res.ok) return undefined

  return await res.json()
}

export default async function IndexPage() {
  const data = await getData()

  return (
    <section className="container py-8">
      <h1 className="mb-4 text-4xl font-medium">List User</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        {data?.map((user) => (
          <div
            key={user.id}
            className="rounded-xl border p-4 text-center shadow-md"
          >
            <Image
              src={`https://ui-avatars.com/api/?name=${user.name}&background=random&rounded=true`}
              width={55}
              height={55}
              alt="Logo"
              className="mx-auto mb-4"
              fetchPriority="high"
            />
            <p className="mb-4 text-sm">{user.name}</p>
            <div className="grid grid-cols-2 gap-4">
              <Link href={`/user/post/${user.id}`}>
                <Button className="w-full" variant={"outline"}>
                  See Posts
                </Button>
              </Link>
              <Link href={`/user/album/${user.id}`}>
                <Button className="w-full" variant={"outline"}>
                  See Albums
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
