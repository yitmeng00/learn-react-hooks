import React, { useState, useEffect } from "react";

function TodoList2() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => setTodos(data));
    }, []);

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList2;
