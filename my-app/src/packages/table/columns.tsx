import { ITO_DO } from "@/app/store/to-do/interface"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<ITO_DO>[] = [
  {
    accessorKey: "task",
    header: "Task",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]

// export const payments: ITO_DO[] = [
//     {
//       id: "728ed52f",
//       status: "to do",
//       task: "m@example.com",
//       description: "asdlkjfhaslkjdfhalksjdhflaksjdhflaksjdhflakjsdhflkajsdhfkljha",
//     },
//     {
//       id: "489e1d42",
//       status: "to do",
//       task: "example@gmail.com",
//       description: "asdlkjfhaslkjdfhalksjdhflaksjdhflaksjdhflakjsdhflkajsdhfkljha",
//     },
//     {
//       id: "489e1d42",
//       status: "in progress",
//       task: "example@gmail.com",
//       description: "asdlkjfhaslkjdfhalksjdhflaksjdhflaksjdhflakjsdhflkajsdhfkljha",
//     },
//     {
//       id: "489e1d42",
//       status: "in progress",
//       task: "example@gmail.com",
//       description: "asdlkjfhaslkjdfhalksjdhflaksjdhflaksjdhflakjsdhflkajsdhfkljha",
//     },
//     {
//       id: "489e1d42",
//       status: "in progress",
//       task: "example@gmail.com",
//       description: "asdlkjfhaslkjdfhalksjdhflaksjdhflaksjdhflakjsdhflkajsdhfkljha",
//     },
//     {
//       id: "489e1d42",
//       status: "in progress",
//       task: "example@gmail.com",
//       description: "asdlkjfhaslkjdfhalksjdhflaksjdhflaksjdhflakjsdhflkajsdhfkljha",
//     },
//     {
//       id: "489e1d42",
//       status: "in progress",
//       task: "example@gmail.com",
//       description: "asdlkjfhaslkjdfhalksjdhflaksjdhflaksjdhflakjsdhflkajsdhfkljha",
//     },
//     {
//       id: "489e1d42",
//       status: "done",
//       task: "example@gmail.com",
//       description: "asdlkjfhaslkjdfhalksjdhflaksjdhflaksjdhflakjsdhflkajsdhfkljha",
//     },
//     // ...
//   ]
  
