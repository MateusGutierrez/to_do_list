"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormField,
  FormItem,
} from "@/components/ui/form"
import { SelectStatus } from "@/packages/toDoForm/selectStatus"
import { changeStatusToDo } from "@/app/store/to-do/slice"
import { useDispatch } from "react-redux";

const FormSchema = z.object({
  status: z
    .string().optional(),
})
interface Props {
    status: string;
    id: Date | string;
}

export function ChangeStatusForm({status, id}: Props) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
        status: status
    }
  })
  const dispatch = useDispatch()
  return (
    <Form {...form} >
      <form className="w-[200px]">
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => {
              return (
                  <FormItem>
                      <SelectStatus
                            onValueChange={(value) => {
                                const data = {
                                    id: id,
                                    status: value,
                                }
                                dispatch(changeStatusToDo(data))
                                field.onChange(value)
                            }}
                            defaultValue={field.value}
                        />
                  </FormItem>
              )
          }}
        />
      </form>
    </Form>
  )
}
