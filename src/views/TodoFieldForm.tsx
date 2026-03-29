import { useState } from "react"

function TodoFieldForm({onCreatedClicked}: {onCreatedClicked: (text: string) => void}) {
  const [inputValue, setInputValue] = useState("");


  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); onCreatedClicked(inputValue); setInputValue(""); }}>
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