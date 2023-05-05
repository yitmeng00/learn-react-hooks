import React, { useReducer } from "react";
import "./App.css";
// import ClassCounter from "./components/useState/ClassCounter";
// import ClassCounterTwo from "./components/useState/ClassCounterTwo";
// import HookCounter from "./components/useState/HookCounter";
// import HookCounterTwo from "./components/useState/HookCounterTwo";
// import HookCounterThree from "./components/useState/HookCounterThree";
// import HookCounterFour from "./components/useState/HookCounterFour";
// import ClassCounterOne from "./components/useEffect/ClassCounterOne";
// import HookCounterOne from "./components/useEffect/HookCounterOne";
// import ClassMouse from "./components/useEffect/ClassMouse";
// import HookMouse from "./components/useEffect/HookMouse";
// import MouseContainer from "./components/useEffect/MouseContainer";
// import IntervalClassCounter from "./components/useEffect/IntervalClassCounter";
// import IntervalHookCounter from "./components/useEffect/IntervalHookCounter";
// import DataFetching from "./components/useEffect/DataFetching";
import ComponentC from "./components/useContext/ComponentC";
// import CounterOne from "./components/useReducer/CounterOne";
// import CounterTwo from "./components/useReducer/CounterTwo";
// import CounterThree from "./components/useReducer/CounterThree";
import ComponentA from "./components/useReducer/ComponentA";
import ComponentB from "./components/useReducer/ComponentB";
import DataFetchingOne from "./components/useReducer/DataFetchingOne";
import DataFetchingTwo from "./components/useReducer/DataFetchingTwo";

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();
export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialState;
        default:
            return state;
    }
};

function App() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <CountContext.Provider
            value={{ countState: count, countDispatch: dispatch }}
        >
            <div className="App">
                {/* <ClassCounter />
                <ClassCounterTwo />
                <HookCounter />
                <HookCounterTwo />
                <HookCounterThree />
                <HookCounterFour /> */}
                {/* <ClassCounterOne />
                <HookCounterOne />
                <ClassMouse />
                <HookMouse /> */}
                {/* <MouseContainer /> */}
                {/* <IntervalClassCounter />
                <IntervalHookCounter /> */}
                {/* <DataFetching /> */}
                {/* <UserContext.Provider value={"Ivan"}>
                    <ChannelContext.Provider value={"Codevolution"}>
                        <ComponentC />
                    </ChannelContext.Provider>
                </UserContext.Provider> */}
                {/* <CounterOne />
                <CounterTwo />
                <CounterThree /> */}
                Count - {count}
                <ComponentA />
                <ComponentB />
                <ComponentC />
                <DataFetchingOne />
                <DataFetchingTwo />
            </div>
        </CountContext.Provider>
    );
}

export default App;
