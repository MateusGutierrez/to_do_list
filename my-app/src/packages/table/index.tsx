import { columns, payments } from "./columns"
import { DataTable } from "./data-table"


export default async function Table() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={payments} />
    </div>
  )
}
