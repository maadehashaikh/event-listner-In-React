import React , {useState} from 'react'

function Counter() {
  let [count , setCount] = useState(0);
  function checkCount () {
    setCount(count+1);
  }
  return (
    <div>
    <h3>Count = {count}</h3>
    <button onClick={checkCount}>Count Increase </button>
    </div>
  )
}

export default Counter
