import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage'
import Login from './Login'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
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
          login
        </a>
      </header> */}
      <Link to="/"></Link>
      <Link to="/login"></Link>
      <Routes>
                <Route exact path='/' element={<LandingPage/>}></Route>
                <Route exact path='/login' element={< Login />}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
