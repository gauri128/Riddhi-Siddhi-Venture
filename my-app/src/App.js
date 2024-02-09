import logo from './logo.svg';
import './App.css';
import Services from './Components/Services_available/service';
import Home from './Components/Home/home';
import ContactUs from './Components/ContactUs/Contact';


function App() {
  return (
    <div className="App">

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Home/>
      <Services/>
      <ContactUs/>
    
    
    </div>


   
    
  );
}

export default App;
