import React from 'react'
import './header.css'
import logolink from '../../assets/images/logo-link.png'

function Header() {
  return (
    <div className='container'>
<div className='headerContainer'>
    <div className='headerLogo'><img src={logolink} /> </div>
    
    <ul className='headerUl'>
        <li>Home</li>
        <li>Price</li>
        <li>Contac us</li>
        <li>Sign In</li>
        

    <div className='headerButon'><button>Sign Up</button></div>
    </ul>
    

</div>

    </div>
  )
}

export default Header