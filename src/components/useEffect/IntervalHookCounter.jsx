// useEffect Hook with incorrect dependency in functional component
import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
    const [count, setCount] = useState(0);

    // incorrect dependency
    /*
    const tick = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval)
        }
    }, []);
    */
    const tick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    // if want to call function within useEffect, define the function within useEffect, so that it is more clear that u need to specify someProp as the dependency
    /*
    useEffect(() => {
        function doSomething() {
            console.log(someProp);
        }
        doSomething();
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [someProp]);
    */

    return <div>{count}</div>;
}

export default IntervalHookCounter;
