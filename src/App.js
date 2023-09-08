import React, { useReducer } from "react";
import "./App.css";

/**
 * useState
 */
// import ClassCounter from "./components/useState/ClassCounter";
// import ClassCounterTwo from "./components/useState/ClassCounterTwo";
// import HookCounter from "./components/useState/HookCounter";
// import HookCounterTwo from "./components/useState/HookCounterTwo";
// import HookCounterThree from "./components/useState/HookCounterThree";
// import HookCounterFour from "./components/useState/HookCounterFour";

/**
 * useEffect
 */
// import ClassCounterOne from "./components/useEffect/ClassCounterOne";
// import HookCounterOne from "./components/useEffect/HookCounterOne";
// import ClassMouse from "./components/useEffect/ClassMouse";
// import HookMouse from "./components/useEffect/HookMouse";
// import MouseContainer from "./components/useEffect/MouseContainer";
// import IntervalClassCounter from "./components/useEffect/IntervalClassCounter";
// import IntervalHookCounter from "./components/useEffect/IntervalHookCounter";
// import DataFetching from "./components/useEffect/DataFetching";

/**
 * useCallback
 */
// import ParentComponent from "./components/useCallback/ParentComponent";

/**
 * useMemo
 */
// import Counter from "./components/useMemo/Counter";

/**
 * useRef
 */
import FocusInput from "./components/useRef/FocusInput";
import ClassTimer from "./components/useRef/ClassTimer";
import HookTimer from "./components/useRef/HookTimer";

/**
 * customHooks
 */
// import DocTitleOne from "./components/customHooks/DocTitleOne";
// import DocTitleTwo from "./components/customHooks/DocTitleTwo";

/**
 * useContext
 */
// import ComponentC from "./components/useContext/ComponentC";

/**
 * useReducer
 */
// import CounterOne from "./components/useReducer/CounterOne";
// import CounterTwo from "./components/useReducer/CounterTwo";
// import CounterThree from "./components/useReducer/CounterThree";
// import ComponentA from "./components/useReducer/ComponentA";
// import ComponentB from "./components/useReducer/ComponentB";
// import DataFetchingOne from "./components/useReducer/DataFetchingOne";
// import DataFetchingTwo from "./components/useReducer/DataFetchingTwo";

/**
 * useContext
 */
// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();
// export const CountContext = React.createContext();

/**
 * useReducer
 */
// const initialState = 0;
// const reducer = (state, action) => {
//     switch (action) {
//         case "increment":
//             return state + 1;
//         case "decrement":
//             return state - 1;
//         case "reset":
//             return initialState;
//         default:
//             return state;
//     }
// };

function App() {
    // const [count, dispatch] = useReducer(reducer, initialState);

    return (
        // <CountContext.Provider
        //     value={{ countState: count, countDispatch: dispatch }}
        // >
            <div className="App">
                {/**
                 * useState
                 */}
                {/* <ClassCounter />
                <ClassCounterTwo />
                <HookCounter />
                <HookCounterTwo />
                <HookCounterThree />
                <HookCounterFour /> */}

                {/**
                 * useEffect
                 */}
                {/* <ClassCounterOne />
                <HookCounterOne />
                <ClassMouse />
                <MouseContainer />
                <IntervalClassCounter />
                <IntervalHookCounter />
                <DataFetching /> */}

                {/**
                 * useContext
                 */}
                {/* <UserContext.Provider value={"Ivan"}>
                    <ChannelContext.Provider value={"Codevolution"}>
                        <ComponentC />
                    </ChannelContext.Provider>
                </UserContext.Provider> */}

                {/**
                 * useReducer
                 */}
                {/* <CounterOne />
                <CounterTwo />
                <CounterThree /> */}
                {/**
                 * useReducer with useContext
                 */}
                {/* Count - {count}
                <ComponentA />
                <ComponentB />
                <ComponentC /> */}
                {/* <DataFetchingOne />
                <DataFetchingTwo /> */}

                {/**
                 * useCallback
                 */}
                {/* <ParentComponent /> */}

                {/**
                 * useMemo
                 */}
                {/* <Counter /> */}

                {/**
                 * useRef
                 */}
                <FocusInput />
                <ClassTimer />
                <HookTimer />

                {/**
                 * customHooks
                 */}
                {/* <DocTitleOne />
                <DocTitleTwo /> */}
            </div>
        // </CountContext.Provider>
    );
}

export default App;
