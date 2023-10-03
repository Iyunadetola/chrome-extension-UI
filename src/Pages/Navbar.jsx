import React, {useState} from 'react'
import icon from '../assets/iCON 7 1.svg'
import { Link } from 'react-router-dom'
import bar from '../assets/menu.png'
import Container from '../component/container/container'
import logo from '../assets/Frame 1000002580.svg'
import '../Pages/Navbar.css'


const Navbar = () => {

    const [active, setActive] = useState(false)
    return (
       <header className='header' >
           <Container>
               <nav className='nav' >
                   <Link to='/' >
                    <img className='logo' src={logo} alt="" />
                    </Link>
                    <ul className={active ? 'links new' : 'links'} >
                        <li>Features</li>
                        <li>How it works</li>
                    </ul>

                    <div className='getStarted' >
                        <Link to='/login' >Get Started</Link>
                        <img onClick={()=>{
                            setActive(pre=>!pre)
                        }} className='bar' src={bar} alt="" />
                    </div>
               </nav>
           </Container>
       </header>


       
    )
}

export default Navbar