import React, { useEffect, useContext } from "react";
import TodosContext from './TodosContext'
import { v4 as uuid } from 'uuid'


function Popup() {
    const [, , todos, setTodos, isActivePopup, setIsActivePopup, todoObject, setTodoObject] = useContext(TodosContext);




    const titleHandle = (e) => {
        console.log(todos, " здесь ")

        let todo = todoObject;
        todo.title = e.target.value;
        setTodoObject({...todo} )
    }

    const textHandle = (e) => {
        let todo = todoObject;
        todo.text = e.target.value;
        setTodoObject({...todo })
    }

    /**
     * call this function ONLY AFTER ALL THE WORK WITH WINDOW
     *
     */
    const closeHandle = () => {
        setTodoObject({ title: "title", text: "Text", action: null })
        setIsActivePopup(false)
    }
    const windowHandle = (e) => {
        e.stopPropagation()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Сработал сабмит, он вызывался?")

        if (todoObject.action === "ADD") {
            let bufik = todoObject;
            bufik.id = uuid()
            delete bufik.action;

            let buf = todos
            buf.push(bufik)
            setTodos(buf)
        }

        if (todoObject.action === "UPDATE") {
            let buf = todos;

            // setTodos([...buf])
            buf.forEach((todo, index) => {

                if (todo.id == todoObject.id) { // fixme === dont working

                    todo.title = todoObject.title
                    todo.text = todoObject.text
                    delete todo.action
                    // console.log(todo)     
                }
            })


            setTodos([...buf])
        }

        closeHandle()

    }


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))    
    }, [todos])

    if (!isActivePopup) {
        return;
    }




    return (
        <div className="popup-container" onClick={closeHandle}>
            <div className="popup-window" onClick={windowHandle}>
                <form onSubmit={handleSubmit} id="todo_form" className="popup-window__form">
                    <textarea form="todo_add" maxLength="1000" className="popup-window__form__input popup-window__form__input-title" placeholder="Your title here" onChange={titleHandle} value={todoObject.title} />

                    <textarea form="todo_add" className="popup-window__form__input popup-window__form__input-text" placeholder="Your text here" onChange={textHandle} value={todoObject.text} />
                    <div className="popup-window__form__buttons-block">
                        <button type="submit" className="popup-window__form__buttons-block__button">Save</button>
                        <button className="popup-window__form__buttons-block__button" onClick={closeHandle}>Close without save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Popup