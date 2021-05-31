import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter,
  faApple,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
library.add(faFacebookSquare, faInstagram, faTwitter, faApple, faGooglePlay);

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
