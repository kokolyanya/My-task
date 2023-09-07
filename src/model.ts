export interface Todo {
    id: number;
    todo:string;
    isDone: boolean;
    children?:JSX.Element|JSX.Element[];
}