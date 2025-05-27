import { BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Project from "./Components/Project"
import Contact from "./Components/Contact"


function App() {
  
  
  return (
      <div className="bg-cyan-900 w-full min-h-screen ">
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Navbar/>}>
              <Route path='' element={<Home/>}></Route>
              <Route path='About' element={<About/>}></Route>
              <Route path='Project' element={<Project/>}></Route>
              <Route path='Contact' element={<Contact/>}></Route>
            </Route>
          </Routes>
        
        </BrowserRouter>
      </div>
  )
}

export default App
