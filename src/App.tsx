import Todos from './views/Todos';
import { useEffect } from 'react';
import { useAppDispatch } from './store/hooks';
import { fetchTodos } from './store/thunks';
import './App.css'

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch])
  return (
    <>
    <Todos />
    </>
  )
}

export default App
