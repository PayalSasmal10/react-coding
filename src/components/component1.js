import React, { useState } from "react";

export const Component1 = () => {
    const [counter, setCounter] = useState(5);
    return (
        <div>
            <div>
                <span>{counter}</span>
            </div>
            <div>
                <button onClick={()=> {
                    setCounter(counter+1);
                    setCounter(counter+1);
                    alert(counter);
                    setCounter(counter+1);
                    setCounter(counter+1);
                }}></button>
            </div>
        </div>
    );
};