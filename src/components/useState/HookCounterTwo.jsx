// useState Hook with previous state in Functional Component
import React, { useState } from "react";

function HookCounterTwo() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    // After click the button, it still increase 1 only, need to update the value based on the previous value
    /*
    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(count + 1);
        }
    };
    */

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount((prevCount) => prevCount + 1);
        }
    };

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Increment
            </button>
            <button onClick={() => setCount((prevCount) => prevCount - 1)}>
                Decrement
            </button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    );
}

export default HookCounterTwo;
