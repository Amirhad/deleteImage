export const loadTodos = () =>{
    return (dispatch) =>{
      fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
        .then((response) => response.json())
        .then((json) =>{
                dispatch({
                    type: "load/start/fulfilled",
                    payload:json
                })
        })
    }
}



export const deleteTodos = (id) =>{
return(dispatch) =>{
    dispatch({type:"delete/todo/start"})
    fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10${id}`,{
        method:"DELETE"
    })
        .then((response) => response.json())
        .then((json) =>{
                dispatch({
                    type: "delete/todo/fulfilled",
                    payload:id
                })
        })
    }
}