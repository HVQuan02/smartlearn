import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <Routes>
      <Route exact path='/' element={<HomePage loggedIn={loggedIn} email={email} />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>
    </Routes>
  )
}

export default App
