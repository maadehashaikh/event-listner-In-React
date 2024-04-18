import React, { useState } from 'react'

function LudoBoard() {
  // understanding Objects 
  let [moves , setMoves] = useState({blue:0 , green:0 , red:0 , yellow:0});
  // understanding array 
  let [arr,setArr] = useState(["no moves"]);

  function updateBlue () {
    setMoves((prevMove) => {
    return  {...prevMove , blue:prevMove.blue +1};
    })  
    // concept of array's state in react 
    // setArr([...arr , "blue moves added"]);
  }
  function updateYellow () {
    setMoves((prevMove) => {
    return  {...prevMove , yellow:prevMove.yellow +1};
    })   
  }
  function updateGreen() {
    setMoves((prevMove) => {
      return  {...prevMove , green:prevMove.green +1};
      })  
  }
  function updateRed() {
    setMoves((prevMove) => {
      return  {...prevMove , red:prevMove.red +1};
      })  
  }
  return (
    <>
    <p>Game Starts Here !</p>
    {/* <h5>{arr}</h5> */}
    <div className='Board'>
    <p>Blue Moves ={moves.blue} </p>
    <button style={{backgroundColor:'blue'}} onClick={updateBlue}>+1</button>
    <p>Yellow Moves = {moves.yellow} </p>
    <button style={{backgroundColor:'yellow'}} onClick={updateYellow}>+1</button>
    <p>Green Moves = {moves.green} </p>
    <button style={{backgroundColor:'green'}} onClick={updateGreen}>+1</button>
    <p>Red Moves = {moves.red}</p>
    <button style={{backgroundColor:'red'}} onClick={updateRed}>+1</button>
    </div>
    </>
  )
}

export default LudoBoard