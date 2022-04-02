import { useState, useEffect } from "react";
import './style.css';

export function InputComp() {

const [number, setNumber] = useState(0);

useEffect(() => {
        setNumber(number)
}, [number]);

return (
    <div className='wrapper'>
      <h2>Exercise 4</h2>
      <div className='inputContainer'>
      <input placeholder='Type number' value={number} onChange={(e) => setNumber(Number(e.target.value))} />
      </div>
      <div>
      <div>Number: {number*2}</div>
      </div>
    </div>
  );
}