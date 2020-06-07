import React, {useState} from 'react';
import TodoItem from './components/TodoItem'
import './App.css';

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) =>
      {
        return index !== id;
      });
    });
  }

  function deleteAllItems(id) {
    let test = [];
    return setItems(test);
  }

  return(
    <div className="container">
      <div className="heading">
        <h1>Todo List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText}/>
        <button onClick={addItem}>Add Task</button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <TodoItem
            key={index}
            id={index}
            text={todoItem} 
            onChecked={deleteItem}/>
          ))}
        </ul>
      </div>
      <button onClick={deleteAllItems}>Delete All Tasks</button>
    </div>
  )
}
export default App;
