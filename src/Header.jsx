import React from 'react';
import logo from './pictures/menuMobile.svg';
import './App.css';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light my-3">
                {/*BURGER MENU TOGGLE BUTTON BELOW*/}
                <button className="navbar-toggler navbar-toggler-icons" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                  <span className="menuToggle">
                      <img src={logo} alt=""/>
                      MENU
                  </span>
                </button>
                {/*BURGER MENU TOGGLE BUTTON ABOVE*/}

                {/*HEADER NAV MENU BELOW*/}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-links" href="#">HOME <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-links" href="#">ABOUT ME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-links" href="#">PORTFOLIO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-links" href="#">CONTACT</a>
                        </li>
                    </ul>
                </div>
                {/*HEADER NAV MENU ABOVE*/}
            </nav>
        </div>
    );
}

export default Header;