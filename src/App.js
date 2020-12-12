import './App.css';
import Header from './Components/Header';
import HomePage from './HomePage';
import AllComponents from './AllComponents';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductPage from './ProductPage';

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
        <Route path="/Details">
          <ProductPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
