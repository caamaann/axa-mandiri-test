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
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import InputForm from "@/components/form/InputForm"
import { Form } from "@/components/ui/form"
import { useEffect, useState } from "react"
import { apiPostComment } from "../_actions/apiPostComment"
import { useParams } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { apiPutComment } from "../_actions/apiPutComment"
import TextAreaForm from "@/components/form/TextAreaForm"
import { TComment } from "@/types/comment"

interface TProps {
  type: "add" | "edit"
  title: string
  data?: TComment
  refetch: () => void
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email("Email not valid"),
  body: z.string().min(2, {
    message: "Body must be at least 2 characters.",
  }),
})

export function DialogComment({ title, type, data, refetch }: TProps) {
  const { toast } = useToast()
  const param = useParams<{ postId: string }>()
  const [loading, setLoading] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      body: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true)
      if (type === "add") {
        const res = await apiPostComment({ ...values, postId: +param.postId })
        toast({
          title: "Success",
          description: "Success to add data",
        })
      } else if (type === "edit") {
        const res = await apiPutComment({
          ...values,
          postId: +param.postId,
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
            <InputForm control={form.control} name="name" label="Name" />
            <InputForm
              control={form.control}
              name="email"
              label="Email"
              fieldInput={{ type: "email" }}
            />
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
