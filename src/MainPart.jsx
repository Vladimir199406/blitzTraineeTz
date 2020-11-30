import React from 'react';
import jasonDesktop from './pictures/JasonDesktop.jpg'
import './App.css';

function MainPart() {
    return (
        <div>
            {/*FIRST LINE BELOW*/}
            <div>
                <hr/>
            </div>
            {/*FIRST LINE ABOVE*/}

            {/*SCROLL DOWN BELOW*/}
            <div className="scrollDown">
                <div className="text-center">SCROLL DOWN TO SEE MORE</div>
                <div className="text-center my-1">
                    <i className="fas fa-angle-double-down slimFont"></i>
                </div>
            </div>
            {/*SCROLL DOWN ABOVE*/}

            {/*DESKTOP MENU BELOW*/}
            <div className="container my-5 text-center">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-links-mid-menu" href="#">HOME <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-links-mid-menu" href="#">ABOUT ME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-links-mid-menu" href="#">PORTFOLIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-links-mid-menu" href="#">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div>
                    <hr/>
                </div>
            </div>
            {/*DESKTOP MENU ABOVE*/}

            {/*CARDS: PICTURE / TEXT BELOW*/}
            <div className="container-fluid row mx-auto">
                <div className="col-sm card">
                    <img src={jasonDesktop} alt="" className="jasonMan img-fluid"/>
                </div>
                <div className="col-sm card my-3 text-left">
                    <h2 className="my-3">ABOUT ME</h2>
                    <p className="my-4">Lorem ipsum sagittis maecenas commodo gravida leo, malesuada orci vivamus odio, lectus ultricies sit nibh molestie. Commodo enim, adipiscing nam diam rutrum commodo rutrum sodales tempus urna morbi ultricies vitae. Gravida mattis vitae&nbsp;&mdash; gravida morbi magna: morbi mauris, in massa&nbsp;&mdash.  </p>
                    <p>Ipsum vivamus, justo metus, lorem sed sodales et bibendum porttitor eu tellus congue ut vulputate ligula. Vivamus; nam enim mauris pharetra porttitor orci amet eu quisque cursus.  </p>
                    <h4>Jason Wood</h4>
                </div>
            </div>
            {/*CARDS: PICTURE / TEXT ABOVE*/}
        </div>
    );
}

export default MainPart;