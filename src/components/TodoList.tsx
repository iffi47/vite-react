import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../store/todoSlice";

function TodoList({todo}:{todo: {text: string, isCompleted: boolean}}) {
  
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