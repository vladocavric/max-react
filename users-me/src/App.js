import React, {useState} from 'react';
import UserCreateForm from './Components/UserCreateForm/UserCreateForm';
import UserList from './Components/UserList/UserList';

function App() {
  const [users, setUsers] = useState([])
  const addUser = (user) => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers]
      updatedUsers.unshift(user)
      return updatedUsers
    })
  }

  const removeUser = (id) => {
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.filter(user => user.id !== id)
      return updatedUsers
    })
  }
	return (
		<div className='container'>
			<UserCreateForm onSaveUser={addUser}/>
			<UserList users={users} removeUser={removeUser}/>
		</div>
	);
}

export default App;
