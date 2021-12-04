import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const url = 'https://api.github.com/users/maulana93/repos'

  const [users, setUsers] = useState([])

  const getDataUsers = async () => {
    const response = await fetch('https://api.github.com/users/maulana93/repos')
    const listrepos = await response.json()
    const users = listrepos
    setUsers(users)
  }

  useEffect(() => {
    getDataUsers()
  }, [])

  return (
    <div className="App">
      <h3>List Repositories Maulana93</h3>
      <center>
        <table>
          <thead>
            <tr>
              <th width="100">ID</th>
              <th width="150">Name</th>
              <th>URL</th>
            </tr>
          </thead>
              {users.map((user) => {
                return (
                  <tr>
                    <td>
                      {user.id}
                    </td>
                    <td>
                      {user.name}
                    </td>
                    <td>
                      {user.html_url}
                    </td>
                  </tr>
                )
              })}
        </table>
      </center>
    </div>
  );
}

export default App;