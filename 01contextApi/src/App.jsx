import UserProvider from './context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserProvider>
           <h1>Irshad Ali</h1>
           <Login/>
           <Profile/>
    </UserProvider>
  )
}

export default App
