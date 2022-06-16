import React, {   useContext, useEffect} from "react";
import Todo from "./Todo"
import TodosContext from './TodosContext'
import { Cookies, useCookies } from 'react-cookie';



function TodosList() {
    const [, , todos] = useContext(TodosContext);

    return (
        <div className="todos-list">
            {
                todos.map((v,i)=>(
                    <Todo id={v.id} index={i} key={v.id}/> 
                ))
            }
        </div>
    )
}


export default TodosList