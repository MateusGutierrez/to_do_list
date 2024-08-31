"use client"
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import OPTIONS from "./constant"
import { SelectProps } from "@radix-ui/react-select"



export const SelectStatus = React.forwardRef<HTMLTextAreaElement, SelectProps>(
    ({ ...props }) =>{
        return (
            <Select {...props}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select the task status" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status</SelectLabel>
                  {OPTIONS.map((option, index) => (
                      <SelectItem value={option.value} key={index}>
                        {option.label}
                      </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )
    }
)

SelectStatus.displayName = "SelectStatus"
