import { useState } from "react";


const MyButton3 = () => {
    const [count, setCount] = useState(0);
 
    return (
        <div>
            <header className="header">

                Exercise 3
            </header>
            <p class="enunciate">
                Iteration 1: Give the value of "x" from ComponentA to ComponentC
                Iteration 2:Change the "x"when clicking on the button "x++"
            </p>
            <div>
                <p>ComponentA</p>
                <p>x={count}</p>
                <div>
                    <p>ComponentB</p>
                    <p>x={count}</p>
                    <div>
                        <p>ComponentC</p>
                        <p>x={count}</p>
                        <button onClick={()=>setCount((count) => count + 1)}>x++</button>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default MyButton3;