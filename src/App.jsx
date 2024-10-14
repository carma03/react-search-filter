/**
 * @file App.js
 */

import { useState, useEffect } from 'react'
import Input from './components/Input.jsx'
import ItemList from './components/ItemsList.jsx'
// import our new hook
import { useGetUsers } from './hooks/useGetUsers.jsx'

function App() {
  // use our custom hook to get our users and 
  // the error and loading variables
  const {users, loading, error} = useGetUsers()
  const [filteredUsers, setFilteredUsers] = useState([])

  useEffect(() => {
    // check if the users are not empty, if so then the 
    // API call was successful and we can update our 
    // filteredUsers state
    if (Object.keys(users).length > 0) {
      setFilteredUsers(users)
    }
  }, [users]) // this effect should run when the users state gets updated

  const filterItems = (searchTerm) => { 
    // we now use 'users' instead of 'apiUsers' to do the filtering
    const filteredItems = users.filter((user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  }

  return (
    <>
      {/* Use the new Input component instead of the input tag */}
      <Input onChangeCallback={filterItems} />
      {loading && <p>Loading...</p>}
      {error && <p>There was an error loading the users</p>}
      {!loading && !error && <ItemList items={filteredUsers} />}
    </>
  )
}

export default App