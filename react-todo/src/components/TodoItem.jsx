import React, {useState} from "react";

function ToDoItem(props) {
    const [isDone, setIsDone] = useState(false);

    function handleClick() {
        setIsDone(prevValue => {
            return !prevValue;
        });
    }

    function handleDelete() {

    }

    return (
        <div >
        <li onClick={() =>{props.onChecked(props.id)}}>
            {props.text}
        </li>
        <input type="checkbox"/>
        </div>
    );
}

export default ToDoItem;