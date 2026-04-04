import { useState } from "react"
import { useAppDispatch } from "../store/hooks";
import { addTodoAsync } from "../store/thunks";

function TodoFieldForm() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useAppDispatch();

  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); dispatch(addTodoAsync({text: inputValue, isCompleted: false})); setInputValue(""); console.log(e) }}>
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