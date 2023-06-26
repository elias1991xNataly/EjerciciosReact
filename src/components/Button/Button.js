import { useState } from "react";
const MyButton = () => {
    const [count, setCount] = useState(0);
    return (

        <div>
            <button class="btn" id="btn1" onClick={() => setCount((count) => count + 1)}>{count} Likes</button>
        </div>
    )
}
export default MyButton;
