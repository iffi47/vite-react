import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

function TodoFieldForm() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); dispatch(addTodo({text: inputValue, isCompleted: false})); setInputValue(""); console.log(e) }}>
        <input 
          type="text" 
          placeholder="Enter todo item here" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default TodoFieldForm