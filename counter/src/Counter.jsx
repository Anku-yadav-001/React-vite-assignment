import React from "react";
function Counter(){
        let [count,setCount]=React.useState(1);
        return <>
        <div>
        <h1>count is: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        <button onClick={()=>setCount(count-1)}>Decrease</button>
        </div>
        </>
}
export default Counter;