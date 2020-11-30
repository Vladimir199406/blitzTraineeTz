import './App.css';
import Header from "./Header";
import MainPart from "./MainPart";
import Footer from "./Footer";

function App() {
  return (
    <div className="App container-fluid text-center background">
        <Header/>
        <MainPart/>
        <Footer/>
    </div>
  );
}

export default App;
