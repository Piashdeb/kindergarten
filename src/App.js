import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Events from './component/Events/Events';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Notfound from './component/NotFound/Notfound';
import Services from './component/Services/Services';


function App() {
  return (
    <div className="App">
     <Router>
     <Header/>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/services">
          <Services/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/events">
          <Events/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="*">
          <Notfound/>
        </Route>
      </Switch>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;
