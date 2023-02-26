import React, {useState, useEffect} from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState({
        searckKey:""
    });
    useEffect(()=> {
        const fetchTodo = async ()=> {
            const todoItems = await fetch('https://jsonplaceholder.typicode.com/todos');
            const json = await todoItems.json();
            console.log(json)
            setTodos(json);
        }
        fetchTodo()
    },[]);
    const filterTodos = todos.slice(0,10).filter((val)=> {
        if(val.title.indexOf(search.searckKey) >= 0) return val;
    }).map((val)=> {
        return(
            <div id={val.id}>
                <p><strong>{val.title}</strong></p>
            </div>
        );
    })
    function searchValue({currentTarget}) {
        setSearch({...search,[currentTarget.name]:currentTarget.value})
    }
    return(
        <div>
            <h2>Todo List</h2>
            <input type="text" name="searckKey" value={search.searckKey} onChange={searchValue}/>
            {filterTodos}
        </div>
    )
}

export default TodoList;