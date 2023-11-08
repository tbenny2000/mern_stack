import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const[users, setUsers] = useState([])
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  useEffect(()=>{
    // this gets all users from db
    axios.get('http://localhost3005/getUsers')
    .then((users) => {
      //console.log(users)
      setUsers(users.data)
      // if there is an error this catches the error
    }).catch(err => console.log(err))
  }, )

  const Submit = () => {
    axios.post('http://localhost:3005/createUser', {name, email, password})
    .then((users) => {
      console.log(users)
    }).catch(err => console.log(err))
  }

  return (
    <div className='center'>
      <h2>MERN (Mongo, Express, React, Node)Full Stack App</h2>
      {
      users.map(users => {
        return <div>
          <h3>{users.name}</h3>
          <h3>{users.email}</h3>
          <h3>{users.password}</h3>
        </div>
      })
    }
    <br />
    <input type = "text" name="name" placeholder="Please enter your Name" 
      onChange={(e) => setName(e.target.value)}/><br/><br/>
    <input type = "text" name="email" placeholder="Please enter your Email"
      onChange={(e) => setEmail(e.target.value)}/><br/><br/>
    <input type = "password" name="password" placeholder="Please enter your Password"
      onChange={(e) => setPassword(e.target.value)}/><br/><br/>
    <button onClick={Submit}>Create User</button>
    </div>
  )
}
export default App
