import React, { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    function handleChange(event) {
        setNewTodo(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setTodos([...todos, newTodo]);
        setNewTodo("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    New Todo:
                    <input
                        type="text"
                        value={newTodo}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
