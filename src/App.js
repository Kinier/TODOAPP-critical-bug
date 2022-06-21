import React, {useEffect, useState} from 'react';
// import userApi from '../src/api/userApi'

import './App.css';
import TodosContext from './components/TodosContext'

import Popup from './components/Popup';
import AddCircle from './components/AddCircle';

import Header from './components/Header.js';
import Footer from './components/Footer.js';

import TodosList from './components/TodosList';

function App() {
  
  const [todosDeleteMode, setTodosDeleteMode] = useState(false);
  const [isActivePopup, setIsActivePopup] = useState(false)

  const [todoObject, setTodoObject] = useState({title: "title", text: "Text", action: null})


  let listBuf = [];
  if (typeof localStorage?.key('todos') === "string"){ // if first time on the site or smth like this
    listBuf = JSON.parse(localStorage.getItem('todos'));
  }
  const [todos, setTodos] = useState(listBuf)

  
 

  
  return (
    <div className="App">
      <TodosContext.Provider value={
              [todosDeleteMode, setTodosDeleteMode, todos, setTodos, isActivePopup, setIsActivePopup, todoObject, setTodoObject]
        } >
        <Popup />
        <AddCircle/>
        

        <Header />
 
        <TodosList />
    
        <Footer/>


      </TodosContext.Provider>
    </div>
  );
}
export default App;
