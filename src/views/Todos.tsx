import TodoList from "../components/TodoList";
import TodoFieldForm from "./TodoFieldForm";
import { useSelector } from "react-redux";
import type { RootState } from "../types";

function Todos() {
  const todos = useSelector((state: RootState) => state.todo.todos);

  return(
    <>
    <div>
      <h1>
        Todos
      </h1>
      <TodoFieldForm />
      {
        todos.map((todo) => (
          <div key={todo.text}>
            <div>{todo.isCompleted ? "Completed:" : "Incomplete:"}</div>
            <TodoList todo={todo} />
          </div>
        ))
      }
    </div>
    </>
  )
}

export default Todos