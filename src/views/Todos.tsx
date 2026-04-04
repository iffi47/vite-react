import TodoList from "../components/TodoList";
import TodoFieldForm from "./TodoFieldForm";
import { useAppSelector } from "../store/hooks";

function Todos() {
  const todos = useAppSelector((state) => state.todo.todos);
  const loadCompleted = useAppSelector(
    (state) => state.loading.loading.completed
  );
  const isListLoading = todos.length === 0 && !loadCompleted;

  return(
    <>
    <div>
      <h1>
        Todos
      </h1>
      <TodoFieldForm />
      {isListLoading ? (
        <p aria-busy="true" aria-live="polite">
          Loading todos…
        </p>
      ) : (
        todos.map((todo) => (
          <div key={todo.id ?? todo.text}>
            <div>{todo.isCompleted ? "Completed:" : "Incomplete:"}</div>
            <TodoList todo={todo} />
          </div>
        ))
      )}
    </div>
    </>
  )
}

export default Todos