import { Todo } from "../components/@types/todo.type"
// const addTodo = (task_name: string) => {
//     const todo: Todo = {
//       name: task_name,
//       done: false,
//       id: new Date().toISOString(),
//     };=>payload
//     setTodos((prev) => [todo, ...prev]); =>reducer
//     syncLocal((todolists) => [todo, ...todolists]);=>reducer
//   };
// dinh nghia action <=> nhung cai ma khien setState
export type Action = 
    | {type:'ADD_TODO',payload:{todo:Todo}} 
    | {type:'EDIT_TODO',payload:{id:string,name:string}}
    | {type:'DEL_TODO',payload:{id:string}}
    | {type:'TICK_TODO',payload:{id:string}}
    | {type:'SET_TODOS',payload:{todos:Todo[]}}

const action =()=>{

}
export default action