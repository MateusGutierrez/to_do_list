export interface ITO_DO {
    id: Date | string;
    task: string;
    status: string;
    description: string;
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