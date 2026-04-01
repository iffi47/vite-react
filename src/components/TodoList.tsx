import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../store/todoSlice";
import type { TodoListProps } from "../types";

function TodoList({ todo }: TodoListProps) {
  
  const dispatch = useDispatch();

  return(
    <>
    <div>

      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Completed!</p>}
      {todo.isCompleted ? <button onClick={() => dispatch(deleteTodo(todo.text))}>Delete item</button>: <button onClick={() => dispatch(completeTodo(todo.text))}>Mark as completed</button>}
    </div>
    </>
  )

}

export default TodoList