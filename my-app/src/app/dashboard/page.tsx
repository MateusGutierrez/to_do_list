import { CardToDo } from "@/packages/card";
import InputForm  from "@/packages/inputForm";
import { useSelector } from "react-redux";
import { ISTATE } from "../store/to-do/interface";
import Table from "@/packages/table";

export default function Dashboard() {
    const toDoList = useSelector((state: ISTATE) => state.toDoReducer.list);
    return (
        <div className="flex justify-between items-center gap-4 w-full">
            <InputForm/>
            <div className="flex gap-4">
                <Table/>
                {toDoList.map((toDo, index) => (
                    <CardToDo toDo={toDo} key={index}/>
                ))}
            </div>
        </div>
    )
}