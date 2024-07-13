import { useContext } from "react"
import { BiCheck, BiEdit, BiTrashAlt } from "react-icons/bi"
import { TodoContext } from "../Context/TodoProvider"

const TodoList = ({id, text, isChecked}) => {
  const {dispatch, editFlag} = useContext(TodoContext)
  const checkTodo  = () => { dispatch({type: "CHECK_TODO", payload: id}) }
  const deleteTodo = () => { dispatch({type: "DELETE_TODO", payload: id}) }
  //console.log(isChecked)
  const editFx = () => { dispatch({type: 'EDIT_CONFIG', payload: {text,id}}) }
  return (
    <li>
      <button className={`checkBtn btn btn-circle ${editFlag && "v-hide"}`}
          onClick={checkTodo}><BiCheck /></button>
      <p className={`text ${isChecked && "liChecked"}`}>{text}</p>
      <button className={`editBtn btn btn-circle ${(isChecked || editFlag) && "v-hide"}`}
          onClick={editFx}><BiEdit /></button>
      <button className={`trashBtn btn btn-circle ${editFlag && "v-hide"}`}
          onClick={deleteTodo}><BiTrashAlt /></button>    
    </li>
  )
}

export default TodoList