export interface ITO_DO {
    id: Date;
    text: string;
    completed: boolean
}
export interface ACTION {
    type: string;
    payload: any
}
export interface ISTATE {
    toDoReducer:{
        list: ITO_DO[]
    }
}