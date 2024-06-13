import { useState } from 'react'

function UserPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  function validate(email, password) {
    if (email === '') {
      setEmailError('Please enter your email!')
      return false
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email')
      return false
    }
    setEmailError('')
    if (password.length < 7) {
      setPasswordError('The password must be 8 characters or longer')
      return false
    }
    setPasswordError('')
    return true
  }

  function handleLogin(e) {
    e.preventDefault()
    const isValid = validate(email, password)
    if (isValid) {
      console.log('okok')
      setEmail('')
      setPassword('')
    }
  }

  return (
  <>
    <h1>You can log in here!</h1>
    <input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} /> <br />
    <label>{emailError}</label> <br />
    <input type="password" placeholder="Enter your password" value={password} onChange={e => setPassword(e.target.value)} /> <br />
    <label>{passwordError}</label> <br />
    <button onClick={handleLogin}>Log in</button>
  </>
  )
}

export default UserPage