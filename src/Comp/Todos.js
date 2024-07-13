import { useContext } from "react";
// import { TodoContext } from "../Context/TodoProvider";
import TodoList from "./TodoList";
import AlertMsg from "./AlertMsg";
import { MemoContext } from "../Context/MemoProvider";

const Todos = () => {
  // const {todos} = useContext(TodoContext)
  const {filteredTodos} = useContext(MemoContext)
  return (
    <ul className="todos">
      {filteredTodos.length > 0 ? (
          filteredTodos.map(todo => (
            <TodoList key={todo.id} {...todo}/>
          ))
        ) : (
          <AlertMsg />
        )
      }
    </ul>
  )
}

export default Todos