import Formulario from "./components/Formulario.jsx";
import {useEffect, useState} from "react";
import Todos from "./components/Todos.jsx";
import EditForm from "./components/EditForm.jsx";

const initialStateTodos = JSON.parse(localStorage.getItem("todos") || "[]");

function App() {
    const [todos, setTodos] = useState(initialStateTodos);
    const [edit, setEdit] = useState(false);

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

    const handleEditTodo = () => {
        setEdit(true);
    }

    const updateTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {...todo, state: !todo.state};
                }
                return todo;
            })
        );
    };

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <>
            {!edit &&
                <div className="container mb-2 w-100 p-4">
                    <h1 className="my-4">Formulario</h1>
                    <Formulario addTodo={addTodo}/>
                    <Todos
                        todos={todos}
                        delTodo={delTodo}
                        updateTodo={updateTodo}
                        editTodo={handleEditTodo}
                    />
                </div>
            }
            {edit &&
                <div className="container mb-2 w-100 p-4">
                    <h1 className="my-4">Editando</h1>
                    <EditForm></EditForm>
                    <Todos
                        todos={todos}
                        delTodo={delTodo}
                        updateTodo={updateTodo}
                        editTodo={handleEditTodo}
                    />
                </div>
            };
        </>
    )
}
export default App;
