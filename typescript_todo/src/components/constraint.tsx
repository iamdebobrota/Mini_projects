export interface TodoType {
    id:number;
    todo:string;
    isDone:boolean;
}
export interface InitialStateType {
    isLoading:boolean;
    isError:boolean;
    todos:TodoType[];
    username?: string
}

export type ReducerType = {
    type: string;
    payload?: string | undefined;
  };
