"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { useDispatch } from "react-redux"
import { addToDo } from "@/app/store/to-do/slice"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { SelectStatus } from "./selectStatus"

const FormSchema = z.object({
  to_do: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().optional(),
  status: z.string().optional()
})

export default function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      to_do: "",
      description: "",
      status: "to do"
    },
  })
  const dispatch = useDispatch()
  function onSubmit(data: z.infer<typeof FormSchema>) {
    dispatch(addToDo({
        id:  Date.now(),
        task: data.to_do,
        status: data.status,
        description: data.description
    }))
    form.reset()
    toast({
      title: "Task added:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Card>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex-col items-center justify-center p-10 space-y-6">
          <FormField
            control={form.control}
            name="to_do"
            render={({ field }) => (
              <FormItem className="flex-col items-center justify-between w-full gap-1 max-w-[400px]">
                <FormLabel className="w-[70px]">To Do:</FormLabel>
                <FormControl>
                  <Input placeholder="To do..." {...field}/>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="flex-col items-center justify-between w-full gap-1 max-w-[400px]">
                <FormLabel className="w-[70px]">Description:</FormLabel>
                <FormControl>
                  <Textarea placeholder="Write task details..." {...field}/>
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem className="flex-col items-center justify-between w-full gap-1 max-w-[400px]">
                <FormLabel className="w-[70px]">Status:</FormLabel>
                <FormControl>
                  <SelectStatus onValueChange={field.onChange} defaultValue={field.value} {...field}/>
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="self-end">Add</Button>
        </form>
      </Form>
    </Card>
  )
}
