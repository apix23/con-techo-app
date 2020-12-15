import './App.css';
import Header from './Components/Header';
import HomePage from './HomePage';
import AllComponents from './AllComponents';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './Components/Footer';
import AboutUs from './AboutUs';

function App() {
  return (
    <Router className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>

        <Route path="/Components">
          <AllComponents/>
        </Route>

        <Route path="/AboutUs">
          <AboutUs/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
