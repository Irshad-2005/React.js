import AddTodo from "./components/AddTodo.jsx"
import './App.css'
import Todos from "./components/Todos.jsx"

function App() {
  

  return (
    <div >
         <h2 className="text-red-900 text-2xl">Redux-toolkit</h2>
         <AddTodo/>
         <Todos/>
    </div>
  )
}

export default App
