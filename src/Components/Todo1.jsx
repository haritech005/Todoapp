import { useState } from "react"

 export default function Todo1() {
  const [tasks,setTasks] = useState([]);
  const [newTask,setNewtask] = useState("");

  function handleInputChange(event) {
    setNewtask(event.target.value)
  }

  function addItem(){

    if(newTask.trim() !== ""){
    setTasks(t => [...t,newTask])
    setNewtask("")
    }
  }

  function deleteItem(index){
    const updateIndex = tasks.filter((_,i) => i !==index)
    setTasks(updateIndex)
  }

  function moveUpItem(index) {
    if (index > 0) {
      const updatedTasks = [...tasks]; // Create a copy of the tasks array
      // Swap the elements at index and index-1
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks); // Update the state with the modified array
    }
  }

  function moveDownItem(index){
    if (index < tasks.length-1) {
      const updatedTasks = [...tasks]; // Create a copy of the tasks array
      // Swap the elements at index and index-1
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks); // Update the state with the modified array
    }
    }
  return (  
    <>
    <div>
    <h1>ToDo App</h1>
      <input 
      type="text"
      placeholder="Enter The Task ..."
      value={newTask}
      onChange={handleInputChange}
      />

      <button className="addbutton" onClick={addItem}>Add Item</button>
    </div>

    <ol>
      {tasks.map((task,index) =>(
        <li key={index}>
          <span >{task}</span>

          <button className="deletebtn" onClick={() =>deleteItem(index)}>Delete</button>
          <button className="moveupbtn" onClick={() =>moveUpItem(index)}>MoveUp</button>
          <button className="movednbtn" onClick={() =>moveDownItem(index)}>MoveDown</button>
        </li>
      ))}
    </ol>
      

        
    </>
  )
}


