import React, { useState } from "react";

const Component2 = () => {
    const [counter, setCounter] = useState(5);
    return (
        <div className="outerDiv">
            <div className="spanDiv">
                <span>{counter}</span>
            </div>
            <div className="spanDiv">
                <button onClick={()=> {
                    setCounter((counter) => counter+5);
                    setCounter((counter) => counter+5);
                    alert(counter);                  
                    setCounter((counter) => counter+5);
                    setCounter((counter) => counter+5);
                }}>Click Me</button>
            </div>
        </div>
)};

export default Component2;