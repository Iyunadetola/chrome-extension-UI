import './App.css'
import Extension from './component/Extension'
import Features from './component/Features'
import Footer from './component/Footer'
import Help from './component/Help'
import Helptwo from './component/Helptwo'
import Hero from './component/Hero'
import Howitwork from './component/Howitwork'
import Nav from './component/Nav'
import Wantsto from './component/Wantsto'
import Navbar from './Pages/Navbar'
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
