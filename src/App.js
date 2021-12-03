import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const url = 'https://api.github.com/users/maulana93/repos'

  const [users, setUsers] = useState([])

  const getDataUsers = async () => {
    const response = await fetch('https://api.github.com/users/maulana93/repos')
    const dataku = await response.json()
    const users = dataku
    setUsers(users)
  }

  useEffect(() => {
    getDataUsers()
  }, [])

  return (
    <div className="App">
      <h3>List</h3>
      {users.map((user) => {
        return (
          <p>
            {user.id}
          </p>
        )
      })}
    </div>
  );
}

export default App;