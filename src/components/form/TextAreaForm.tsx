import React from "react"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { type Control } from "react-hook-form"
import { Textarea, type TextareaProps } from "../ui/textarea"

interface TProps {
  control: Control<any>
  name: string
  label: string
  fieldInput?: TextareaProps
}

export default function TextAreaForm({
  control,
  name,
  label,
  fieldInput,
}: TProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea {...field} {...fieldInput} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
