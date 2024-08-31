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
