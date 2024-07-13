import { nanoid } from "nanoid";
import { useContext, useEffect, useState } from "react";
import { BiBlock, BiPlusCircle, BiUpArrowCircle} from "react-icons/bi";
import { TodoContext } from "../Context/TodoProvider";

const Form = () => {
  const {dispatch, editFlag, textToEdit} = useContext(TodoContext)

  const [text, setText] = useState('')
  const handleSubmit = (e) => { 
    e.preventDefault();

    if(!editFlag){ //this is meant for creating a new item only
      const newTodo = {id: nanoid(), text, isChecked: false}
      dispatch({type: "ADD_TODO", payload: newTodo}) //or newTodo:newTodo})
    }
    else if(editFlag){
      dispatch({type: "EDIT_TODO", payload: text})
      back2Default()
    }
    //clear input
    setText('')
  }

  const back2Default = () => { dispatch({type: "REBOOT"}) }

  useEffect(() => {
    setText(textToEdit)
  }, [textToEdit])

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <input type="text" value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Type something...' required/>
      </div>
      <button className="btn" type="submit">{!editFlag ? <BiPlusCircle /> : <BiUpArrowCircle/>}</button>
      {editFlag && <button className="btn" type="button" onClick={back2Default}><BiBlock /></button>}
    </form>
  )
}

export default Form