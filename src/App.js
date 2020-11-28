import logo from './pictures/menuMobile.svg';
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
          <div>SCROLL</div>
          <div>ARROW</div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default App;
