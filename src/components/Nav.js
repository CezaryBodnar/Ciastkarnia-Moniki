import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

function Nav() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <nav>
                <Link to="/">
                    <img className="logo" src="logo.png" alt="logo" />
                </Link>

                <div className="menu-icon" onClick={() => setOpenMenu(!openMenu)}>
                    <i className={openMenu ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className="nav-links">
                    <HashLink to="/#offer">
                        <li>Oferta</li>
                    </HashLink>
                    <Link to="/orders">
                        <li>Zamówienia</li>
                    </Link>
                    <HashLink to="/#gallery">
                        <li>Galeria</li>
                    </HashLink>
                    <HashLink to="/#about">
                        <li>O mnie</li>
                    </HashLink>
                    <Link to="/pricelist">
                        <li>Cennik</li>
                    </Link>
                    <HashLink to="/#contact">
                        <li>Kontakt</li>
                    </HashLink>
                </ul>
            </nav>
            <div className="nav-hidden" style={{ opacity: openMenu ? '1' : '0' }}>
                <ul className="active">
                    <HashLink to="/#offer" onClick={() => setOpenMenu(false)}>
                        <li>Oferta</li>
                    </HashLink>
                    <Link to="/orders" onClick={() => setOpenMenu(false)}>
                        <li>Zamówienia</li>
                    </Link>
                    <HashLink to="/#gallery" onClick={() => setOpenMenu(false)}>
                        <li>Galeria</li>
                    </HashLink>
                    <HashLink to="/#about" onClick={() => setOpenMenu(false)}>
                        <li>O mnie</li>
                    </HashLink>
                    <Link to="/pricelist" onClick={() => setOpenMenu(false)}>
                        <li>Cennik</li>
                    </Link>
                    <HashLink to="/#contact" onClick={() => setOpenMenu(false)}>
                        <li>Kontakt</li>
                    </HashLink>
                </ul>
            </div>
        </>
    )
}

export default Nav
