import { useState } from "react";
import "./App.css";
import FormInput from "./UI/FormInput";
import Users from "./UI/Users";
import User from "./UI/User";



function App() {
  const [users, setUsers] = useState([
    {
      id: 0,
      name: "Max",
      age: 33,
    },
    {
      id: 1,
      name: "Moritz",
      age: 22,
    },
  ]);


  const addUserHandler = user => {
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.unshift({id: Math.random().toString(), name: user.name, age: users.age});
      return updatedUsers;
    });
  };

  return (
    <div>
      <FormInput onAddUser={addUserHandler}/>
      <Users data={users} />
    </div>
  );
}

export default App;
