import "./App.css";
import Header from "./Components/Header";
import HomePage from "./HomePage";
import AllComponents from "./AllComponents";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/Components" component={AllComponents} />
      </Switch>
    </Router>
  );
}

export default App;
