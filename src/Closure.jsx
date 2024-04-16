import React from 'react'

function Closure () {
  let a = 10;
  function inner () {
    let b = 20;
    console.log(a+b);
  }
  return inner;
}
export default Closure
