import React from "react"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { type Control } from "react-hook-form"
import { Input, type InputProps } from "../ui/input"

interface TProps {
  control: Control<any>
  name: string
  label: string
  fieldInput?: InputProps
}

export default function InputForm({
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
            <Input {...field} {...fieldInput} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
