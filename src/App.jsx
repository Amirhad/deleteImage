import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { deleteTodos, loadTodos } from './actions';

function App() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch() 
  useEffect(() =>{
    dispatch(loadTodos())
  },[])


  const handleDelete = (id) =>{
    dispatch(deleteTodos(id))
  }


  return (
    <>



    {
      todos.map((item) =>{
        return (
          <figure class="caption-border">
          <img src={item.url}/>
          <figcaption>{item.title}</figcaption>
          <button onClick={() =>handleDelete(item.id)}>x</button>
      </figure>
        )
      })
    }

    </>
  );
}

export default App;
