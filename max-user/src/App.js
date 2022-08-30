import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = () => {
  const [usersList, setUsersList] = useState([])
  const onAddUserHandler = (username, age) => {
    setUsersList(prevUsers => {
      return [{username, age, id: Math.random().toString()}, ...prevUsers]
    })
  }
  return (
    <div className="App">
        <AddUser onAddUser={onAddUserHandler}/>
        <UsersList users={usersList} />
    </div>
  );
}

export default App;
