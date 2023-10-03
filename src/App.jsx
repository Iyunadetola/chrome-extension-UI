import './App.css'
import Extension from './component/Extension'
import Help from './component/Help'
import Helptwo from './component/Helptwo'
import Hero from './component/Hero'
import Howitwork from './component/Howitwork'
import Wantsto from './component/Wantsto'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Helpmeout from './component/Helpmeout'


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element ={<Login/>} />
        <Route path='/helpmeout' element = { <Helpmeout/> }/>
        <Route path='/help'  element ={<Help/>}/>

      </Routes>
   
      {/* <Help/>
      <Nav/>
      <Helptwo/>
      <Extension/>
      <Wantsto/> */}
    </HashRouter>
  )
}

export default App
