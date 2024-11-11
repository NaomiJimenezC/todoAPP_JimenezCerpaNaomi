import React from 'react';
import Swal from "sweetalert2";
import todo from "./Todo.jsx";

const handleSubmit = (event) => {
    event.preventDefault();
    if (!todo.title.trim() || !todo.description.trim()) {  // Cambié `title` y `description` por `todo.title` y `todo.description`
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Falta completar los campos!",
            footer: '<a href="#">¿Por qué tengo este problema?</a>'
        });
        return;
    }}

function EditForm({currentTodo}) {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Introduce la tarea"
                    className="form-control mb-2"
                    // value={currentTodo.title}
                    // onChange={handleChange}
                />
                <textarea
                    name="description"
                    placeholder="Introduce la descripción"
                    className="form-control mb-2"
                    value={todo.description}
                    // onChange={handleChange}
                />

                <select
                    name="state"
                    className="form-select mb-2"  // Corrección de clase
                    value={todo.state}
                    // onChange={handleChange}
                >
                    <option value="completada">Completada</option>
                    <option value="pendiente">Pendiente</option>
                </select>

                <button
                    type="submit"
                    className="btn btn-primary mb-2"  // Corrección de clase
                >
                    Editar tarea
                </button>

                <div className="form-check mb-2">
                    <input
                        type="checkbox"
                        className="form-check-input"  // Corrección de clase
                        name="priority"
                        id="inputCheck"
                        checked={todo.priority}
                        // onChange={handleChange}
                    />
                    <label
                        htmlFor="inputCheck"
                        className="form-check-label"  // Corrección de clase
                    >
                        Prioridad
                    </label>
                </div>
            </form>
        </>
    );
}

export default EditForm;