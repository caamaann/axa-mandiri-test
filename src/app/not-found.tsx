import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col items-center justify-center">
      <h2 className="mb-2 text-5xl">Not Found</h2>
      <p className="mb-4">Could not find requested resource</p>
      <Link href="/">
        <Button variant={"outline"}>Return Home</Button>
      </Link>
    </div>
  )
}
