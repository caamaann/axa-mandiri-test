import { CircleOff } from "lucide-react"
import React from "react"

export default function EmptyState() {
  return (
    <div className="mx-auto w-full max-w-4xl rounded-lg bg-white px-10 py-4 shadow-lg">
      <div className="flex flex-col items-center justify-center py-12">
        <CircleOff size={72} className="text-gray-500" />
        <p className="mb-2 text-xl font-semibold text-gray-500">
          Your list is empty
        </p>
      </div>
    </div>
  )
}
