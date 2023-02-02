import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './header.css'
const Header = () => {

    const navigate = useNavigate()
    const info = localStorage.getItem('LoggedIn')


    const handleLogout = () => {
        localStorage.setItem('LoggedIn', false);
        navigate('/')
        window.location.reload()

    }


    return (

        <div className='header'>
            <ul>
                {info == 'true' ? (<>
                    <li className='menuItem'> <Link to='/'>Mano saskaitos</Link></li>
                    <li className='menuItem'> <Link to='/'>Pagrindinis</Link></li>
                    <li className='menuItem'> <Link to='/'>Kaina</Link></li>
                    <li className='menuItem'> <Link to='/'>Kontaktai</Link></li>
                    <li className='menuItem'> <Link to='/'>Pagalba</Link></li>
                    <button onClick={handleLogout} className="btn btn-primary">Atsijungti</button></>

                ) : (<>
                    <li className='menuItem'> <Link to='/'>Pagrindinis</Link></li>
                    <li className='menuItem'> <Link to='/'>Kaina</Link></li>
                    <li className='menuItem'> <Link to='/'>Kontaktai</Link></li>
                    <li className='menuItem'> <Link to='/'>Pagalba</Link></li>
                </>
                )}

            </ul>
        </div>
    )
}

export default Header