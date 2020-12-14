import "./App.css";
import Header from "./Components/Header";
import HomePage from "./HomePage";
import AllComponents from "./AllComponents";
import Search from "./Components/Search/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Components" component={AllComponents} />
        <Route path="/Search" component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
