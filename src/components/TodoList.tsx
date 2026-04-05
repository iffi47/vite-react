import type { TodoListProps } from "../types";
import { useAppDispatch } from "../store/hooks";
import { deleteTodoAsync, updateTodoAsync } from "../store/thunks";
import styled from "styled-components";

function TodoList({ todo }: TodoListProps) {
  const dispatch = useAppDispatch();
  const id = todo.id;
const CardContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(255, 255, 255, 0.5);
  padding: 15px;
  width: auto;
`
  return(
    <>
    <CardContainer>

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
    </CardContainer>
    </>
  )

}

export default TodoList