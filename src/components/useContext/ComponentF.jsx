// Original way of using useContext
// import React from "react";
// import { UserContext, ChannelContext } from "../../App";

// function ComponentF() {
//     return (
//         <div>
//             <UserContext.Consumer>
//                 {(user) => {
//                     return (
//                         <ChannelContext.Consumer>
//                             {(channel) => {
//                                 return (
//                                     <div>
//                                         User context value: {user}, Channel
//                                         context value: {channel}
//                                     </div>
//                                 );
//                             }}
//                         </ChannelContext.Consumer>
//                     );
//                 }}
//             </UserContext.Consumer>
//         </div>
//     );
// }

import React, { useContext } from "react";
import { CountContext } from "../../App";

function ComponentF() {
    const countContext = useContext(CountContext);

    return (
        <div>
            Component F - {countContext.countState}
            <button onClick={() => countContext.countDispatch("increment")}>
                Increment
            </button>
            <button onClick={() => countContext.countDispatch("decrement")}>
                Decrement
            </button>
            <button onClick={() => countContext.countDispatch("reset")}>
                Reset
            </button>
        </div>
    );
}

export default ComponentF;
