import React, {useContext, useEffect} from "react";
import TodosContext from "./TodosContext";

function AddCircle() {
    const [
        todosDeleteMode, setTodosDeleteMode, todos, setTodos, isActivePopup, setIsActivePopup, todoObject, setTodoObject
    ] = useContext(TodosContext);


    const showPopup = () => {
        

        let todo = todoObject;
        todo.action = "ADD"
        todo.title = ""
        todo.text= ""
        setTodoObject(todo)

        isActivePopup ? setIsActivePopup(false) : setIsActivePopup(true)

    }

    return (
        <div className="circle-container" onClick={showPopup}>
            <div className="add-circle">

            </div>
        </div>
    )
}


export default AddCircle