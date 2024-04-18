import React ,{useState} from 'react'

function TodoList() {
  let [todos , setTodos] = useState(["Sample task"]);
  let [newTodo,setNewTodo] = useState("");
  function addItem () {
    setTodos([...todos , newTodo]);
    setNewTodo("");
  }
  const updateTask = (event) => {
    setNewTodo(event.target.value);
  } 
  return (
    <>
    <h1>To Do List </h1>
     <input type="text" placeholder='Enter Your To Do Itme Here !' value={newTodo} onChange={updateTask}/>
     <button onClick={addItem}> Add</button>
     <br/>
     <h4>List Items :</h4>
     <hr />
     <ul>
      {
        todos.map((task) => (
          <li>{task}</li>
        ))
      }

     </ul>
    </>
  )
}

export default TodoList