import InputForm  from "@/packages/toDoForm";
import Table from "@/packages/table";

export default function Dashboard() {
    return (
        <div className="w-[80%] flex justify-between items-center gap-4 m-auto">
            <div className="flex-col items-center justify-between w-full max-w-[500px] min-h-screen gap-4 mt-4">
                <div className="w-full mb-4">
                    <p className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                        <code className="font-mono font-bold">To Do List</code>
                    </p>
                </div>
                <InputForm/>
            </div>
            <div className="flex justify-start items-start align-top gap-4 w-full min-h-screen mt-4">
                <Table/>
            </div>
        </div>
    )
}