export const ToDoListItem = () =>{
    return (
         <li className="todo-list-item__wrapper">
                            <span>Первая задача</span>
                            <div className="todo-list-item__buttons">
                                <button className="btn-trash">Del</button>
                                <button className="btn-check">Done</button>
                            </div>
                        </li>
    )
}