import { ToDoListItem } from "./ToDoListItem/ToDoListItem"

export const ToDoList = () => {
    let myVar = 'vare'
    myVar = 3
    return(
        <div className="todo-container">
                    <ul className="todo-list failed">
                       <ToDoListItem />
                    </ul>
                    <ul className="todo-list completed">
                        <ToDoListItem />
                    </ul>
                </div>
    )
}