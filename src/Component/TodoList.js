import Todo from "./Todo";
const TodoList = ({todos, setTodos, filtters}) => {
    const deleteHandeler = (todo) => {
        setTodos(todos.filter(item => item.id !== todo.id))
    }
    const checkHandeler = (todo) => {
        setTodos(todos.map(item => {
            if(todo.id === item.id){
                return {
                    ...item, completed: !todo.completed
                }
            } return item;
        }))
    }
    return (
        <div className="todoList-div" >
            {
                filtters.map(todo => 
                    <Todo key={todo.id} todos={todos} todo={todo} onDelete={deleteHandeler} onCheck={checkHandeler}/> 
                )
            }
        </div>
    )
}

export default TodoList;