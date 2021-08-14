import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./global";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
function App() {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
