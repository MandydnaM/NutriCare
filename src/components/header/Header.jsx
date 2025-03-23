import React, { useState } from 'react'
import './header.css'
import Logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import { Link } from 'react-scroll'

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <div className='header'>
            <img src={Logo} alt="" className='logo' />

            {menuOpened === false && mobile === true ? (
                <div style={{ backgroundColor: 'var(--appColor)', padding: '0.55rem', borderRadius: '5px' }}
                    onClick={() => (setMenuOpened(true))}>
                    <img src={bars} style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
            ) : (
                <ul className='header-menu'>
                    <li>
                        <Link to='hero' span={true} smooth={true} onClick={() => (setMenuOpened(false))}>Home</Link></li>
                    <li>
                        <Link to='programs' span={true} smooth={true} onClick={() => (setMenuOpened(false))}>Features</Link></li>
                    <li>
                        <Link to='reasons' span={true} smooth={true} onClick={() => (setMenuOpened(false))}>Why us</Link></li>
                    <li>
                        <Link to='plansbox' span={true} smooth={true} onClick={() => (setMenuOpened(false))}>Plans</Link></li>
                    <li >
                        <Link to='testimonials' span={true} smooth={true} onClick={() => (setMenuOpened(false))}>Testimonials</Link>
                    </li>
                </ul >
            )}

        </div>
    )
}

export default Header