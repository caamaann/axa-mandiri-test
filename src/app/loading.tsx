import { Loader2 } from "lucide-react"

export default function LoadingPage() {
  return (
    <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
      <div className="flex items-center gap-2">
        <Loader2 className="h-10 w-10 animate-spin" />{" "}
        <span className="text-4xl">Please wait</span>
      </div>
    </div>
  )
}
