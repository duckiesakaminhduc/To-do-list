
import { Action } from "../actions/action"
import { Todo } from "../components/@types/todo.type"

// ta nen nho:const [state, dispatch] = useReducer(todoReducer, []);
//             ==>> state co gia tri []
const reducer =(state:Todo[],action:Action)=>{
    switch (action.type) {
        // const addTodo = (task_name: string) => {
//     const todo: Todo = {
//       name: task_name,
//       done: false,
//       id: new Date().toISOString(),
//     };=>action.payload
//     setTodos((prev) => [todo, ...prev]); =>reducer
//     syncLocal((todolists) => [todo, ...todolists]);=>reducer
//   };
// dinh nghia action <=> nhung cai ma khien setState

        case 'ADD_TODO':
            const todo = action.payload;
            //return lai nhung gi ham setState lam
            return [todo, ...state]
            
// const deleteTask = (id: string) => {
//     const index = todos.findIndex((todo) => todo.id === id);
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//     syncLocal(() => newTodos);
//   };
        case 'DEL_TODO':
            const index = state.findIndex((todo)=>todo.id === action.payload.id);
            const newTodos = [...state];
            newTodos.splice(index,1);
            return [newTodos];
        case 'EDIT_TODO':
            return state.map((todo)=>{
                todo.id===action.payload.id 
                ?{...todo,name:action.payload.name}
                :todo
            })
        case 'SET_TODOS':
            return action.payload.todos;
        case 'TICK_TODO':
            return state.map((todo)=>{
                todo.id===action.payload.id 
                ? {...todo,done:!todo.done}
                :todo;
            })
        default:
            return state;
    }
}
export default reducer
// const tickTask = (id: string) => {
//     const handle = (todosObj: Todo[]) => {
//       return todosObj.map((todo) => {
//         if (todo.id === id) {
//           return { ...todo, done: !todo.done };
//         }
//         return todo;
//       });
//     };

//     setTodos(handle);
//     syncLocal(handle);
// };