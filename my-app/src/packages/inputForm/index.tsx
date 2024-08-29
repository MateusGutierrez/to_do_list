"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { useDispatch, useSelector } from "react-redux"
import { ToDoTypes } from "@/app/store/to-do/action-types"
import { addToDoAction } from "@/app/store/to-do/actions"
import { addToDo } from "@/app/store/to-do/slice"

const FormSchema = z.object({
  to_do: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      to_do: "",
    },
  })
  const dispatch = useDispatch()
  function onSubmit(data: z.infer<typeof FormSchema>) {
    // dispatch(addToDoAction(data.to_do))
    dispatch(addToDo({
        id:  Date.now(),
        text: data.to_do,
        completed: false,
    }))
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex gap-4 items-center justify-center">
        <FormField
          control={form.control}
          name="to_do"
          render={({ field }) => (
            <FormItem>
              <FormLabel>To Do:</FormLabel>
              <FormControl>
                <Input placeholder="To do..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="self-end">Add</Button>
      </form>
    </Form>
  )
}
