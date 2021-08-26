import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chat from "./Chat";
import Profile from "./Profile";
import AppBar from "./AppBar";

const App = () => {
  return (
    <Router>
      <AppBar />
      <Switch>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
