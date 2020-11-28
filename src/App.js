import logo from './pictures/menuMobile.svg';
import lineHeader from './pictures/LineHeader.svg';
import lineFooter from './pictures/LineFooter.svg';
import jasonDesktop from './pictures/JasonDesktop.jpg'

import './App.css';

function App() {
  return (
    <div className="App container-fluid">



      <div className="background">
          <div>
              <nav className="navbar navbar-expand-lg navbar-light">
                  <button className="navbar-toggler navbar-toggler-icons" type="button" data-toggle="collapse"
                          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-expanded="false" aria-label="Toggle navigation">
                      <span className="menuToggle">
                          <img src={logo} alt=""/>
                          MENU
                      </span>
                  </button>

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
              </nav>
          </div>
          <div>

          </div>
          <div className="text-center my-5">SCROLL DOWN TO SEE MORE</div>
          <div className="text-center my-1">
              <i className="fas fa-angle-double-down slimFont"></i>
          </div>
      </div>



      <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
             <img src="" alt=""/>
          </div>
      </div>



      <div className="container row">
          <div className="col-sm">
              <img src={jasonDesktop} alt="" className="jasonMan"/>
          </div>
          <div className="col-sm">
              <p>Lorem ipsum sagittis maecenas commodo gravida leo, malesuada orci vivamus odio, lectus ultricies sit nibh molestie. Commodo enim, adipiscing nam diam rutrum commodo rutrum sodales tempus urna morbi ultricies vitae. Gravida mattis vitae&nbsp;&mdash; gravida morbi magna: morbi mauris, in massa&nbsp;&mdash.  </p>
              <p>Ipsum vivamus, justo metus, lorem sed sodales et bibendum porttitor eu tellus congue ut vulputate ligula. Vivamus; nam enim mauris pharetra porttitor orci amet eu quisque cursus.  </p>
          </div>
      </div>



      <div></div>
    </div>
  );
}

export default App;
