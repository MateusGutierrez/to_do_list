"use client"
import { ITO_DO } from "@/app/store/to-do/interface"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface Props {
    toDo: ITO_DO
}

export const CardToDo = ({toDo}: Props) => {
    return (
        <Card className="w-25%">
            <CardHeader>
                <CardTitle>{toDo.text}</CardTitle>
                <CardDescription>Status: {toDo.completed}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    )
}