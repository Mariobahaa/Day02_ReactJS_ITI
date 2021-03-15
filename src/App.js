import Home from './components/home'
import About from './components/about'
import Profile from './components/profile'
import Error from './components/error'
import "bootstrap"
import {BrowserRouter, Route, Switch, Link} from "react-router-dom"


const App =()=> {
  return (

    <BrowserRouter>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success ">
  <div className="container-fluid  ">
    <div className="collapse navbar-collapse row" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item offset-3 col-2 ">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item col-2">
          <Link className="nav-link active"  to="/profile">Profile</Link>
        </li>
        <li className="nav-item  col-2">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/profile" component={Profile}/>
    <Route path="*" component={Error}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
