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





// Understanding difference and Concepts of passing a function to set State or passing a reference only  
// function initialize () {
//   return Math.random();
// }
// export default function Counter (){
// let [count,setCount] = useState(initialize()); => initialize() this will call func again and again and we have to pass it as reference like 
// this  let [count,setCount] = useState(initialize)
// let increaseCount = () => {
//   setCount(count+1);
// }
// }
// return (
// <div>
// <h3>Count = {count} </h3>
// <button onclick ={increaseCount }>Increase Count</button>
// </div>
// ) 

