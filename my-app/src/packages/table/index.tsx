import { ISTATE } from "@/app/store/to-do/interface";
import { columns } from "./columns"
import { DataTable } from "./data-table"
import { useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Table() {
  const data = useSelector((state: ISTATE) => state.toDoReducer.list);
  return (
    <div className="container mx-auto w-full">
      {isEmpty(data) ? (
        <Card>
          <CardHeader>
            <CardTitle>
              Add tasks to your list
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              To add tasks to do, write the main title or just the task name, add a description if you want and then you can choose the current status for the task.
            </CardDescription>
          </CardContent>
        </Card>
      ) : (
        <DataTable columns={columns} data={data} />
      )}
    </div>
  )
}
