import React, { useContext, useEffect } from "react";
import logo from '../list256.png'
import TodosContext from './TodosContext'
import { useCookies } from 'react-cookie';



function Header() {
    const [todosDeleteMode, setTodosDeleteMode, todos, setTodos] = useContext(TodosContext);


    const massDeleteMode = (e) => {
        if (todosDeleteMode === false) { // как выглядит при включенном массделите
            setTodosDeleteMode(true)

            document.getElementsByClassName('mod-switcher-pic')[0].style.backgroundColor = "#004445"
            document.getElementsByClassName('mod-switcher-pic')[0].style.borderRadius = "5px"
        } else { // как выглядит при выключенном
            setTodosDeleteMode(false)
            document.getElementsByClassName('mod-switcher-pic')[0].style.backgroundColor = "transparent"

            let buf = todos.filter((val)=> { // todos = todos.filter....
                if (val.isChecked === true) // if todo object is selected
                    return false

                return true
            })
            setTodos(buf)
        }
        

    }

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    

    return (
        <header>
            <header-list>
                <img src={logo} alt="mode switcher picture" onClick={() =>massDeleteMode()} checked={todosDeleteMode} className="mod-switcher-pic" />
                <div>TODO LIST!</div>
                <div>MY TODOS: {todos.length}</div>
            </header-list>
        </header>
    )
}


export default Header