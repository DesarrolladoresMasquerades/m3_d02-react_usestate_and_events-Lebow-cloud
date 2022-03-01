import { useState } from "react";

export default function counter() {
  const [count, setCount] = useState(0)

  /* const [dayOfWeek, setDayOfWeek] = useState("Monday")*/

return(
    <div className="counter">  

        <p>You have a total of <span>{count}</span></p>

        <button onClick = {() => setCount(counter + 1)}>Add 1</button>
        <button onClick = {() => setCount(counter - 1)}>Subtract 1</button>

    </div>
    )
}