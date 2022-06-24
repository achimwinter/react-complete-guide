import { useState } from 'react';
import Users from './components/view/Users'
import './App.css';
import UserInput from './components/forms/UserInput';

function App() {
  const [users, setUsers] = useState([
    {
      id: 0,
      name: 'Max',
      age: 22
    }, {
      id: 1,
      name: 'Moritz',
      age: 44
    }
  ]);

  const addUserHandler = enteredUser => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ id: Math.random().toString(), name: enteredUser.name, age: enteredUser.age});
      return updatedUsers;
    })
  }


  return(
      <div className="App">
        <UserInput onAddUser={addUserHandler}/>
        <Users className='card' data={users}/>
     </div>
  )
}

export default App;