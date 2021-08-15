import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import LeaderBoard from "./Components/LeaderBoard";
import Profile from "./Components/Profile";
import TrackingPage from "./Components/TrackingPage"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import "./css/file.css"

function App() {
  return (
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <Signup></Signup> 
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/leaderboard">
            <LeaderBoard></LeaderBoard>
          </Route>
          <Route exact path="/profile">
            <Profile></Profile>
          </Route>
        </Switch>
        {/* <Footer></Footer> */}
      </Router>
  );
}

export default App;
