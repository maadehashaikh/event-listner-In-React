import React from 'react'
function submitForm (event) {
  event.preventDefault();
  console.log("Form Has Submitted Sucessfully !");
}

function Form() {
  return (
    <form onSubmit={submitForm}>
    <button>Submit here !</button>
    </form>
  )
}

export default Form