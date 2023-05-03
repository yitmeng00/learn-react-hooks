// useEffect Hook with running effect conditionally in functional component
import React, { useState, useEffect } from "react";

function HookCounterOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    // useEffect runs after every single render, however it might cause performance problem
    // in order to conditionally run effect, specified second parameter which is the array of value that the effects depends on
    useEffect(() => {
        console.log("useEffect - Updating Document Title...");
        document.title = `You clicked ${count} times`;
    }, [count]);

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => setCount(count + 1)}>
                Click {count} times
            </button>
        </div>
    );
}

export default HookCounterOne;
