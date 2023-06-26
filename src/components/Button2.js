import { useState } from "react";
const MyButton2 = () => {
    const [count, setCount] = useState(0);
    const [resulOfOperation, setResultOfOperation] = useState();
    const [operators, setOperators] = useState("+");
    const number = 0;
    function calculate() {
        if (operators === "+") {
            setResultOfOperation(count + count);
        } else if (operators === "-") {
            setResultOfOperation(count - count)
        } else if (operators === "x") {
            setResultOfOperation(count * count)
        } else if (operators === "/") {
            setResultOfOperation(count / count)
        }



    }
    return (
        <div>

            <header className="header">

                Exercise 2
            </header>
            <p class="enunciate">
                Increment the number when you click on the buttons and display the result of the operation. You can only use 3 states.
            </p>
            <p>

                <button onClick={() => setCount((count) => count + 1)}>({count})</button>
                <select onClick={calculate} onChange={event => setOperators(event.target.value)} id="operators">
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="x">x</option>
                    <option value="/">/</option>
                </select>
                <button onClick={() => setCount((count) => count + 1)}>({count})</button>
                =
                {resulOfOperation || "0"}
            </p>
        </div>
    )
}
export default MyButton2;