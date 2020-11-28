import logo from './pictures/menuMobile.svg';
import lineHeader from './pictures/LineHeader.svg';
import lineFooter from './pictures/LineFooter.svg';
import jasonDesktop from './pictures/JasonDesktop.jpg'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
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
              <img src={lineHeader} alt=""/>
          </div>
          <div>SCROLL DOWN TO SEE MORE</div>
          <div>
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
              <img src={lineFooter} alt=""/>
          </div>
      </div>


      <div className="container row">
          <div className="col-sm-6">
              <img src={jasonDesktop} alt="" className="jasonMan"/>
          </div>
          <div className="col-sm-6">
              <p>Lorem ipsum sagittis maecenas commodo gravida leo, malesuada orci vivamus odio, lectus ultricies sit nibh molestie. Commodo enim, adipiscing nam diam rutrum commodo rutrum sodales tempus urna morbi ultricies vitae. Gravida mattis vitae&nbsp;&mdash; gravida morbi magna: morbi mauris, in massa&nbsp;&mdash; sapien mauris quisque vivamus bibendum integer at sodales, arcu nulla et massa fusce pharetra. Maecenas risus porttitor ultricies: diam duis metus pellentesque eget sagittis, vitae. Sed ut rutrum porttitor sodales lectus orci integer malesuada enim massa tellus morbi non sapien, justo. Massa, cursus sapien arcu, nulla bibendum, curabitur elementum sed nulla orci vitae maecenas et mauris <b>ornare lorem</b> mattis integer duis justo non leo donec. Congue donec, adipiscing pellentesque commodo eros ornare</p>
              <p>Ipsum vivamus, justo metus, lorem sed sodales et bibendum porttitor eu tellus congue ut vulputate ligula. Vivamus; nam enim mauris pharetra porttitor orci amet eu quisque cursus, odio in quisque tempus arcu fusce mattis&nbsp;&mdash; adipiscing  Lorem vulputate sit enim donec, eu massa fusce nibh: metus eros nec morbi orci odio malesuada in: vivamus maecenas porttitor.  maecenas integer pellentesque, magna et sem lectus amet mauris </p>
          </div>
      </div>


      <div></div>
    </div>
  );
}

export default App;
