import Formulario from "./components/Formulario.jsx";
import {useEffect, useState} from "react";
import Todos from "./components/Todos.jsx";

const initialStateTodos= JSON.parse(localStorage.getItem("todos") || []);
function App() {
    const [todos,setTodos] = useState(initialStateTodos)

    const addTodo = (todo) => {
        setTodos([...todos,todo])
    }

    const delTodo = (id)=>{
        const filtrado = todos.filter(todo => todo.id !== id)
        setTodos(filtrado)
    }

    const sortTodo = (todos) =>{
        todos.sort((x,y)=>{
            return x.priority === y.priority;
        })
    }

    const updateTodo = (id) =>{
        const filtrado = todos.map(todo =>{
            if (todo.id === id){
                todo.state = !todo.state
            }
            return todo
        })
        setTodos(filtrado)
    }
  useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todos))
      sortTodo(initialStateTodos)
  })
  return (
    <>
        <div className="container mb-2 w-100 p-4">
            <h1 className="my-4" >Formulario</h1>
            <Formulario addTodo={addTodo}/>
            <Todos
                todos={todos}
                delTodo={delTodo}
                updateTodo={updateTodo}
            />
        </div>

    </>
  )
}

export default App
