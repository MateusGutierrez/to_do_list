"use client"

import { removeToDo } from "@/app/store/to-do/slice";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

interface Props{
    id: Date | string;
}

export const DeleteButton = ({id}: Props) => {
    const dispatch = useDispatch()
    const onClick = useCallback(() => {
        dispatch(removeToDo(id))
    }, [dispatch, id])
    return (
        <Button className="bg-transparent" onClick={onClick}>
            <TrashIcon/>
        </Button>
    )
}