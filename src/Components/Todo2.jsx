import { useEffect, useRef, useState } from "react";
import './Todo.css';

export const Todo2 = () => {
    const [list, setList] = useState([]);
    const [newList, setNewList] = useState("");

    const pervRef = useRef(list)

    const handleInputChange = (event) => {
        setNewList(event.target.value);
    }

    const  addInput = ()  => {
        if (newList.trim() !== "") {
            setList((prv) => [...prv, newList]);
            setNewList("");
        }
    }

    const deleteInput = (index) => {
        const updateList = list.filter((_, i) => i !== index);
        setList(updateList);
    }

    const upInput = (index) => {
        if (index > 0) {
            const updatedList = [...list];  
            
            let itemMoveUp = updatedList.splice(index,1) [0];
            updatedList.splice(index-1,0,itemMoveUp)
            
            setList(updatedList);  
        }
    }
    

    const dnInput = (index) => {
        if (index < list.length-1) {
            const updatedList = [...list];  
            
            let itemMovedn = updatedList.splice(index,1) [0];
            updatedList.splice(index+1,0,itemMovedn)
            
            setList(updatedList);  
        }
    }

    useEffect(() =>{
        if(pervRef.current.length > list.length){
            alert("Can I Delete This List")
        }

        pervRef.current = list
    },[list])

    return (
        <>
            <div className="todo-container">
                <h2 className="todo-heading">ToDo List App</h2>
                <input
                    type="text"
                    className="todo-input"
                    placeholder="Enter a task..."
                    value={newList}
                    onChange={handleInputChange}
                />
                <button className="todo-add-btn" onClick={addInput}>
                    Add Item
                </button>
            </div>

            <ol className="todo-list">
                {list.map((item, index) => (
                    <li key={index} className="todo-item">
                        <span className="todo-text">{item}</span>
                        <button className="todo-btn todo-delete" onClick={() => deleteInput(index)}>Delete</button>
                        <button className="todo-btn todo-up" onClick={() => upInput(index)}>MoveUp</button>
                        <button className="todo-btn todo-down" onClick={() => dnInput(index)}>MoveDown</button>
                    </li>
                ))}
            </ol>
        </>
    );
};
