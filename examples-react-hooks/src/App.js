import { useState } from "react";
import Counter from "./components/useState/Counter";
import TodoList from "./components/useState/TodoList";
import TodoList2 from "./components/useEffect/TodoList2";
import UserProfile from "./components/useEffect/UserProfile";
import "./App.css";

function App() {
    /* Counter, TodoList, Todolist2 example */
    // return (
    //     <>
    //         <Counter />
    //         <TodoList />
    //         <TodoList2 />
    //     </>
    // );

    /* UserProfile example */
    const [userId, setUserId] = useState(1);

    function handleInputChange(event) {
        setUserId(event.target.value);
    }

    return (
        <div>
            <label>
                User ID:
                <input
                    type="number"
                    value={userId}
                    onChange={handleInputChange}
                />
            </label>
            <UserProfile userId={userId} />
        </div>
    );
}

export default App;
