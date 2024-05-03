"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { type TPosts } from "@/types/posts"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import InputForm from "@/components/form/InputForm"
import { Form } from "@/components/ui/form"
import { useEffect, useState } from "react"
import { apiPostPost } from "../_actions/apiPostPost"
import { useParams } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { apiPutPost } from "../_actions/apiPutPost"
import TextAreaForm from "@/components/form/TextAreaForm"

interface TProps {
  type: "add" | "edit"
  title: string
  data?: TPosts
  refetch: () => void
}

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  body: z.string().min(2, {
    message: "Body must be at least 2 characters.",
  }),
})

export function DialogPost({ title, type, data, refetch }: TProps) {
  const { toast } = useToast()
  const param = useParams<{ userId: string }>()
  const [loading, setLoading] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      body: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true)
      if (type === "add") {
        const res = await apiPostPost({ ...values, userId: +param.userId })
        toast({
          title: "Success",
          description: "Success to add data",
        })
      } else if (type === "edit") {
        const res = await apiPutPost({
          ...values,
          userId: +param.userId,
          id: data?.id,
        })
        toast({
          title: "Success",
          description: "Success to edit data",
        })
      } else {
        throw new Error("Type not valid")
      }
      refetch()
      setOpen(false)
      form.reset()
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (data) {
      form.reset(data)
    }
  }, [data])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={type === "edit" ? "secondary" : "default"}>
          {title}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Make changes to your post here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid gap-4 py-4"
          >
            <InputForm control={form.control} name="title" label="Title" />
            <TextAreaForm control={form.control} name="body" label="Body" />
            <Button type="submit" loader={loading}>
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
