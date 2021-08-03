import { useState } from "react";
const Form = ({onAdd}) => {
 const [inputText, setInputText] = useState({
     task: "",
     time: "",
 });
 const inputTextHandeler = (e) => {
     const {name, value} = e.target;
     setInputText(pervious => ({...pervious, id: Math.random(), completed: false, [name]: value})
)}
const onclick = (e) => {
    onAdd(inputText);
    setInputText({
        task: "",
        time: ""});
    e.preventDefault();
}
    return(
        <form>
            <label htmlFor="task">Add Todo</label>
                <input value={inputText.task} onChange={inputTextHandeler} name="task" type="text" />
            <label htmlFor="time">Add Time</label>
                <input value={inputText.time} onChange={inputTextHandeler} name="time" type="text" />
            <input onClick={onclick} type="submit" value="save" />
        </form>
    )
}
export default Form;