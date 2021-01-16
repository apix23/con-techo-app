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
import SocialCalculator from './SocialCalculator';
import Search from './Components/Search/Search'

function App() {
  return (
    <Router className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Components" component={AllComponents} />
        <Route path="/Search" component={Search} />
        <Route path="/Calculadora-social" component={SocialCalculator} />
        <Route path="/AboutUs" component={AboutUs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
