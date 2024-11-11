import Formulario from "./components/Formulario.jsx";
import {useEffect, useState} from "react";
import Todos from "./components/Todos.jsx";

const initialStateTodos = JSON.parse(localStorage.getItem("todos") || "[]");

function App() {
    const [todos, setTodos] = useState(initialStateTodos);

    const ordenarTareas = (todos) => {
        return [...todos].sort((a, b) => {
            if (a.state !== b.state) {
                return a.state - b.state;
            }
            return b.priority - a.priority;
        });
    };

    const addTodo = (todo) => {
        console.log(todos)
        setTodos((prevTodos) => ordenarTareas([...prevTodos, todo]));
    };
    const delTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, state: !todo.state };
                }
                return todo;
            })
        );
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        console.log(initialStateTodos)
    }, [todos]);

    return (
        <>
            <div className="container mb-2 w-100 p-4">
                <h1 className="my-4">Formulario</h1>
                <Formulario addTodo={addTodo} />
                <Todos todos={todos} delTodo={delTodo} updateTodo={updateTodo} />
            </div>
        </>
    );
}

export default App;
