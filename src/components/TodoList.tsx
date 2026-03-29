import { useState } from "react";

function TodoList({todo, onCompletedClicked, onDeletedClicked}:{todo: {text: string, isCompleted: boolean}, onCompletedClicked?: (text: string) => void, onDeletedClicked?: (text: string) => void}) {

  return(
    <>
    <div>

      <h3>{todo.text}</h3>
      {todo.isCompleted && <p>Completed!</p>}
      {todo.isCompleted ? <button onClick={() => onDeletedClicked?.(todo.text)}>Delete item</button>: <button onClick={() => onCompletedClicked?.(todo.text)}>Mark as completed</button>}
    </div>
    </>
  )

}

export default TodoList