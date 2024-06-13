import { useNavigate } from "react-router-dom"

function HomePage(props) {
  const navigate = useNavigate()
  const { loggedIn, email } = props
  function handleClickLoginBtn() {
    navigate('/login')
  }

  return (
  <>
    <h1>This is homepage</h1>
    <button onClick={handleClickLoginBtn}>{loggedIn ? 'Log out' : 'Log in'}</button>
    {loggedIn ? <p>Hello {email}</p> : <div></div>}
  </>
  )
}

export default HomePage