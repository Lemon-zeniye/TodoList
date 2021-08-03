const Header = ({Select, onToggle, toggler}) => {
    return (
        <nav>
            <h3>Todo List</h3>
            <div>
                <button onClick={onToggle} style={{backgroundColor: toggler ? "red" : 
            "green", }} >{`${toggler ? "Close" : "Add-Todo"}`}</button>
                <select onChange={Select}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </nav>
    )
}
export default Header;