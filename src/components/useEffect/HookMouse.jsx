// useEffect Hook with running effect only once in functional component
import React, { useState, useEffect } from "react";

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log("Mouse Event");
        setX(e.clientX);
        setY(e.clientY);
    };

    useEffect(() => {
        console.log("useEffect called");
        window.addEventListener("mousemove", logMousePosition);

        // cleanup after unmount if not the event is still there and trigger the useEffect
        return () => {
            console.log("Component unmounting code");
            window.removeEventListener("mousemove", logMousePosition);
        };
    }, []);

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    );
}

export default HookMouse;
