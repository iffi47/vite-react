// import { useState } from "react";
import TodoList from "../components/TodoList";
import TodoFieldForm from "./TodoFieldForm";

function Todos({completedTodos, incompleteTodos, onCompletedClicked, onDeletedClicked, onCreateClicked}: {completedTodos: {text: string, isCompleted: boolean}[], incompleteTodos: {text: string, isCompleted: boolean}[], onCompletedClicked: (text: string) => void, onDeletedClicked: (text: string) => void, onCreateClicked: (text: string) => void}) {
  // const [todos, setTodos] = useState<string[]>([]);
  // const [inputValue: String, setInputValue] = useState("");

  return(
    <>
    <div>
      <h1>
        Todos
      </h1>
      <TodoFieldForm  onCreatedClicked={onCreateClicked}/>
      <div>Completed:</div>
      {
        completedTodos.map((todo) => <TodoList key={todo.text} todo={todo} onDeletedClicked={onDeletedClicked} />)
      }
      <div>Incomplete:</div>
      {
        incompleteTodos.map((todo) => <TodoList key={todo.text} todo={todo} onCompletedClicked={onCompletedClicked} />)
      }
    </div>
    </>
  )
}

export default Todos