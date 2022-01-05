import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";


function App() {
  

  return (
    <Router>
    <div className="App">
    <Switch >
          <Route exact path='/'>
            <Login/>
          </Route>
          <Route exact path='/signup'>
            <Signup/>
          </Route>
      
      </Switch>
    </div>
  </Router>
  );
}

export default App;
