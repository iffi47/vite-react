import { useState } from 'react'
import Todos from './views/Todos'

import './App.css'

function App() {
  const [completedTodos, setCompletedTodos] = useState<{text: string, isCompleted: boolean}[]>([{text: "Buy milk", isCompleted: true}, {text: "Go to the gym", isCompleted: true}]);
  const [incompleteTodos, setIncompleteTodos] = useState<{text: string, isCompleted: boolean}[]>([{text: "Learn React", isCompleted: false}, {text: "Learn TypeScript", isCompleted: false}]);

  function markAsComplete(text: string){
    const todoToComplete = incompleteTodos.find(t => t.text === text);
    setIncompleteTodos(incompleteTodos.filter(t => t.text !== text));
    if (todoToComplete) {
      setCompletedTodos([...completedTodos, {...todoToComplete, isCompleted: true}]);
    }
  }
  function deleteTodo (text: string){
    setCompletedTodos(completedTodos.filter(t => t.text !== text));

  }
  function onCreateClicked(text: string){
    setIncompleteTodos([...incompleteTodos, {text, isCompleted: false}])
  }
  return (
    <>
    <Todos completedTodos={completedTodos}
     incompleteTodos={incompleteTodos}
     onCompletedClicked={markAsComplete}
     onDeletedClicked={deleteTodo}
     onCreateClicked={onCreateClicked}
     />
    </>
  )
}

export default App
