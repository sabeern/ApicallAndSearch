import React, {useState, useEffect} from 'react';

const UserList = () => {
    const [user, setUser] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(()=> {
        console.log('first')
        const fetchUser = async ()=> {
            let userDetails = await fetch('https://jsonplaceholder.typicode.com/users');
            let json = await userDetails.json();
            setUser(json);
            console.log(json)
        }
        fetchUser();
    },[]);
    const searchFunction = (e)=> {
        setSearch(e.target.value);
    }
    const userNames = user.map((val)=> {
        return(
            <div key={val.id}>
                <p><strong>{val.name}</strong></p>
            </div>
        )
    })
    const filterUser = user.filter((val)=> {
        if(val.name.indexOf(search) >= 0) return val
    }).map((val)=> {
        return(
            <div key={val.id}>
                <p><strong>{val.name}</strong></p>
            </div>
        )
    })
    return(
        <div>
            <h2>User List</h2>
            <input type="text" name="keyword" onChange={searchFunction} value={search}/>
            {filterUser}
        </div>
    )
}

export default UserList;