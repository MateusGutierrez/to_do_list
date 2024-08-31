"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChangeStatusForm } from "./changeStatusForm"
import { ITO_DO } from "@/app/store/to-do/interface"
import { DeleteButton } from "./deleteButton"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: ITO_DO[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<ITO_DO, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md border min-w-fit">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
              <TableRow
                className="h-32"
                key={row.id}
                data-state={row.getIsSelected() ? "selected" : undefined}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="max-w-[300px] max-h-[200px] overflow-y-auto">
                        {cell.column.id === "status" ? (
                          <div className="flex items-center gap-4">
                            <ChangeStatusForm status={cell.row.original.status} id={cell.row.original.id}/>
                            <DeleteButton id={cell.row.original.id}/>
                          </div>
                        ) : (
                          flexRender(cell.column.columnDef.cell, cell.getContext())
                        )}
                    </TableCell>
                ))}
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}
