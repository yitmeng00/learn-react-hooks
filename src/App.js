import React from "react";
import "./App.css";
import ClassCounter from "./components/useState/ClassCounter";
import ClassCounterTwo from "./components/useState/ClassCounterTwo";
import HookCounter from "./components/useState/HookCounter";
import HookCounterTwo from "./components/useState/HookCounterTwo";
import HookCounterThree from "./components/useState/HookCounterThree";
import HookCounterFour from "./components/useState/HookCounterFour";

function App() {
    return (
        <div className="App">
            <ClassCounter />
            <ClassCounterTwo />
            <HookCounter />
            <HookCounterTwo />
            <HookCounterThree />
            <HookCounterFour />
        </div>
    );
}

export default App;
