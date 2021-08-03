import { useState, useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";
import "../App.css";
const App = () => {
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filtters, setFiltters] = useState([]);
    const addTodos = (inputText) => {
        setTodos([...todos, inputText])
    }
    const [toggler, setToggler] = useState(false);
    const filterHandeler = () => {
        switch(status){
            case "completed":
                setFiltters(todos.filter(todo => todo.completed));
            break
            case "uncompleted":
                setFiltters(todos.filter(todo => !todo.completed ))
            break
            case "all":
                setFiltters(todos.filter(todo => todos));
        }
    }
    const selectHandeler = (e) => {
      setStatus(e.target.value);
    }
    useEffect(() => {
        filterHandeler();
    }, [todos, status]);
    const toggleHandeler = () => {
        setToggler(!toggler);
    }
    return ( 
        <div className="app">
           <Header onToggle={toggleHandeler} Select={selectHandeler} toggler={toggler}  />
           {toggler &&  <Form onAdd={addTodos} />}
           {todos.length > 0 ? <TodoList todos={todos} setTodos={setTodos}  filtters={filtters} /> : "It is empty Add some Todos"}
            <Footer />
        </div>
    )
}
export default App;