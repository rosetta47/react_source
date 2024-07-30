import React from "react";

function TodoList({todos}){
    return(
        <ul className="TodoList">
            {todos.map((todo) => (
                <TodoListItem 
                todo={todo}
                key={todo.id}
                />
            )

            )}

        </ul>

    );

}

export default TodoList;