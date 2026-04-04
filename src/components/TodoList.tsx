import type { TodoListProps } from "../types";
import { useAppDispatch } from "../store/hooks";
import { deleteTodoAsync, updateTodoAsync } from "../store/thunks";

function TodoList({ todo }: TodoListProps) {
  const dispatch = useAppDispatch();
  const id = todo.id;

  return(
    <>
    <div>

      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Completed!</p>}
      {id &&
        (todo.isCompleted ? (
          <button type="button" onClick={() => dispatch(deleteTodoAsync(id))}>
            Delete item
          </button>
        ) : (
          <button
            type="button"
            onClick={() =>
              dispatch(updateTodoAsync({ id, updates: { isCompleted: true } }))
            }
          >
            Mark as completed
          </button>
        ))}
    </div>
    </>
  )

}

export default TodoList