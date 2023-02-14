import React, { useState } from 'react';
import UserList from './components/UI/UserList';
import AddUser from './components/Users/AddUser';



function App() {
  const [allusers, setuser] = useState([])

const addUser = (user) =>{
  setuser((prev)=>{
    return [...prev, {name:user.name, age:user.age, id:Math.random().toString()}]
  })
}

  return (
    <div>
      <AddUser adduser={addUser} />
      <UserList users={allusers}/>
    </div>
  );
}

export default App;
