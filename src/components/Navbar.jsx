import React from 'react'
import {FaCoins} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import '../Navbar.css'
import Logo from '../CyberBeekeeper - grey scale 01.png'

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
            <img className='logo' src={Logo} alt="horse" />
                <h1 className='purple'> Info <span className='grey'>Cripto</span></h1>
            </div>
        </Link>
    )
}

export default Navbar