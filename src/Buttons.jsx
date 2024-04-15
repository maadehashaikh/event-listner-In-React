import React, { useState } from 'react'

function clickFunc () {
  console.log("You Have Clicked Me ! ")
}
function MouseOver () {
  console.log("I am MouseOver event and it is non click event ")
}
function  doubleClick () {
  console.log("You have double clicked me !")
}
function Buttons() {
  return (
    <>
    <button onClick={clickFunc}>Click Me !</button>
    <p onMouseOver={MouseOver}>Its a MouseOver Event</p>
    <button onDoubleClick={doubleClick}>Double Click Me !</button> 
    
    </>
  )
}

export default Buttons