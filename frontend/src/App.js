import './App.css'
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './containers/Home/home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          
          </Routes>
      </Router>
    </div>
  );
}

export default App;
