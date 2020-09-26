import React from "react";
import NavBar from "./NavBar";
import GamesList from "./GamesList";
import Create from "./Create";
import SingleGame from "./SingleGame";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchGames } from "../store/gamelist";

class Main extends React.Component {
  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    return (
      <Router>
        <div id="header">
          <h1>Your Game Library</h1>
          <NavBar />
          </div>
          <Switch>
            <Route exact path="/">
              <div id="homeimg">
                <img src="home.jpg" />
              </div>
            </Route>
            <Route exact path="/games" component={GamesList} />
            <Route exact path="/games/create" component={Create} />
            <Route exact path="/games/:gameId" component={SingleGame} />
          </Switch>
      </Router>
    );
  }
}
const dispatchProps = (dispatch) => ({
  fetchGames: () => dispatch(fetchGames()),
});

export default connect(null, dispatchProps)(Main);
