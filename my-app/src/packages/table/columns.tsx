"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  status: "to do" | "in progress" | "done"
  task: string
}

// export const columns: ColumnDef<Payment>[] = [
//     {
//       accessorKey: "amount",
//       header: () => <div className="text-right">Amount</div>,
//       cell: ({ row }) => {
//         const amount = parseFloat(row.getValue("amount"))
//         const formatted = new Intl.NumberFormat("en-US", {
//           style: "currency",
//           currency: "USD",
//         }).format(amount)
  
//         return <div className="text-right font-medium">{formatted}</div>
//       },
//     },
//   ]
  

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "task",
    header: "Task",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]

export const payments: Payment[] = [
    {
      id: "728ed52f",
      status: "to do",
      task: "m@example.com",
    },
    {
      id: "489e1d42",
      status: "to do",
      task: "example@gmail.com",
    },
    {
      id: "489e1d42",
      status: "in progress",
      task: "example@gmail.com",
    },
    {
      id: "489e1d42",
      status: "in progress",
      task: "example@gmail.com",
    },
    {
      id: "489e1d42",
      status: "in progress",
      task: "example@gmail.com",
    },
    {
      id: "489e1d42",
      status: "in progress",
      task: "example@gmail.com",
    },
    {
      id: "489e1d42",
      status: "in progress",
      task: "example@gmail.com",
    },
    {
      id: "489e1d42",
      status: "done",
      task: "example@gmail.com",
    },
    // ...
  ]
  
