import {AiFillDelete} from "react-icons/ai";
const Todo = ({todo, onDelete, onCheck}) => {
    return (
       <div className={`
       ${todo.completed ? "todo-div checked" : "todo-div"} `} onDoubleClick={() => onCheck(todo)}>
            <div>
                <p>{todo.task}</p>
                <p>{todo.time}</p>
            </div>
            <AiFillDelete style={{color: "red", cursor: "pointer"}} onClick= {() => onDelete(todo)} />
       </div>
    )
}
export default Todo;