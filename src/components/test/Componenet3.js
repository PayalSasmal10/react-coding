import React, { useRef } from "react";

const Component2 = () => {
    const counter = useRef(0);
    
    counter.current = counter.current + 1;

    return (
        <div className="outerDiv">
            <div className="spanDiv">
                <span>{counter.current}</span>
            </div>
            <div className="spanDiv">
                <button onClick={()=> {
                }}>Click Me</button>
            </div>
        </div>
)};

export default Component2;