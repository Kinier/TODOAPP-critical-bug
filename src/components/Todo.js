import React, { useContext, useEffect } from "react";
import TodosContext from './TodosContext'

import { useCookies } from 'react-cookie';

function Todo({ id: id, index: index }) {
    const [todosDeleteMode, setTodosDeleteMode, todos, setTodos, isActivePopup, setIsActivePopup, todoObject, setTodoObject] = useContext(TodosContext);


    const clickOnTodo = (e) => {
        e.preventDefault(); // fixme нужно ли оно здесь??
        console.log('123123123123123')

        if (todosDeleteMode) {
            id = e.currentTarget.id; // так стоп, у не меня получается
            let buf = todos;
            buf.forEach((todo, index) => {
                if (todo.id == id) { // fixme === dont working

                    todo.isChecked = todo.isChecked ? false : true;
                    if (todo.isChecked === true) {
                        document.getElementById(id).style.backgroundColor = "orange"
                    } else {
                        document.getElementById(id).style.backgroundColor = "#2C7873"
                    }
                }
            })
            setTodos(buf)
        }

        if (!todosDeleteMode) {
            id = e.currentTarget.id; // так стоп, у не меня получается
            let buf = todos;
            buf.forEach((todo, index) => {
                if (todo.id == id) { // fixme === dont working

                    todo.action = "UPDATE"
                    setTodoObject(todo)
                    isActivePopup ? setIsActivePopup(false) : setIsActivePopup(true)

                }
            })
        }
    }
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        <div className="todos-list_todo-preview" onClick={clickOnTodo} id={id}>
            <div>{limitStr(todos[index].title)}</div>
            <hr />
            <div>{limitStr(todos[index].text, 200)}</div>
        </div>
    )
}

const limitStr = (str, index = 20) => {
    if (str.length > index) {
        str = str.substr(0, index);
        return str += "...";
    } else {
        return str
    }

}


export default Todo