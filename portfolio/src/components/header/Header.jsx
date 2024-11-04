import React from 'react'
import './header.css'
import { useState } from 'react';

const Header = () => {
    const [Toggle, setToggle] = useState(false);

    const [active, setActive] = useState('#home');

    window.addEventListener("scroll", function(){
        const header = document.querySelector('.header');
        if (this.scrollY >= 80 ) header.classList.add("scroll-header")
        else header.classList.remove("scroll-header")
    })
    return (
        <header className="header">
            <nav className="nav container">
                <h1><a href="index.html" className="nav__logo">Ayush
                </a></h1>
                {/* ========================================================  Navbar system  ======================================== */}
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActive('#home')} className={active === "#home" ? "nav__link active-link" : "nav__link" }>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActive('#skills')} className={active === "#skills" ? "nav__link aactive-link" : "nav__link" }>
                                <i className="uil uil-file-check-alt nav__icon"></i> Skills
                            </a>
                        </li>


                        {/* <li className="nav__item">
                            <a href="#project" onClick={() => setActive('#project')} className={active === "#project" ? "nav__link active-link" : "nav__link" }>
                                <i className="uil uil-clapper-board nav__icon"></i> Project
                            </a>
                        </li> */}
                        <li className="nav__item">
                            <a href="#project" onClick={() => setActive('#qualification')} className={active === "#project" ? "nav__link active-link" : "nav__link" }>
                                <i className="uil uil-clapper-board nav__icon"></i> Project
                            </a>
                        </li>
                        {/* <li className="nav__item">
                            <a href="#blog" className="nav__link">
                                <i className="uil uil-tablet nav__icon"></i> Blog
                            </a>
                        </li> */}

                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActive('#contact')} className={active === "#contact" ? "nav__link active-link" : "nav__link" }>
                                <i className="uil uil-phone nav__icon"></i> Contact
                            </a>
                        </li>

                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => setToggle(!Toggle)} ></i>
                </div>

                <div className="nav__toggle" onClick={() => setToggle(!Toggle)} >
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header
