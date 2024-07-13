import { createContext, useEffect, useReducer } from "react"
import TodoReducer from "../reducer/TodoReducer"

const initialState = {
  todos : [],
  editFlag: false,
  editID: '',
  textToEdit: ''
}

export const TodoContext = createContext()

export const TodoProvider = ({children}) => { 
  const [state, dispatch] = useReducer(TodoReducer, initialState, () =>{
    const storedTodos = localStorage.getItem('todos')
    return {
      ...initialState,
      todos: storedTodos ? JSON.parse(storedTodos) : initialState.todos
    }
  })

   // Use useEffect to save 'todos' to localStorage whenever it changes
   useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state.todos));
  }, [state.todos]);

  return (
    <TodoContext.Provider value={{
      todos: state.todos,
      editFlag: state.editFlag,
      editID: state.editID,
      textToEdit: state.textToEdit,
      dispatch
    }}>
      {children}
    </TodoContext.Provider>
  )
}