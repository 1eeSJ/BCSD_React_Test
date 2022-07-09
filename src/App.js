import './App.css';
import './signin/signin';
import SignIn from './signin/signin';
import SignUp from './signup/signup';
import {Route, Routes, Link} from 'react-router-dom';



function App() {

  return (
    <div className="App">
      <ul>
        <li><Link to='/signin/signin'>Sign In</Link></li>
        <li><Link to='/signup/signup'>Sign Up</Link></li>
      </ul>
      <div className="Box">
        <Routes>
          {/* <Route path='/signin/signin'><SignIn></SignIn></Route>
          <Route path='/signup/signup'><SignUp></SignUp></Route> */}
        </Routes>
        <SignUp></SignUp>
      </div>
    </div>
  );
}

export default App;
