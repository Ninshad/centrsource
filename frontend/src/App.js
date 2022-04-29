import './App.css'
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './containers/Home/home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
// import PrivateRoute from './components/HOC/privateRoute';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
