import React, { useState } from 'react'

function UpdaterFunction() {
  let [count , setCount] = useState(0);
  function updatingCount () {
    setCount((currCount) => {
        return currCount + 1;
    });
    setCount((currCount) => {
      return currCount + 1;
  });
  }
  return (
    <div>
    <h3>Count = {count}</h3>
    <button onClick={updatingCount}>Count Increase </button>
    </div>
  )
}

export default UpdaterFunction