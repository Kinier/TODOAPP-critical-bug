import React, { Component } from "react";

class userApi extends Component{



    /**
     *  returns json 
     *
     * @return {json object} 
     * @memberof userApi
     */
    getTodos(){
        let arr = []
        for ( let i = 0; i <= 20; i++){
            arr.push({id: i , text: 'text', title: 'title', isChecked: false})
        }
        

        return JSON.stringify(arr)

        // return JSON.parse(localStorage.getItem('todos'))
    }

    saveTodos(){
        // todo save todos
    }

    deleteTodoById(todoId){
        
    }

    deleteTodosByIds(todosIds){
       
    }
}


export default new userApi();