import React from "react";
import { connect } from "react-redux";
import { fetchGame } from "../store/singlegame";
import Update from '../components/Update'

class SingleGame extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.loadGame(this.props.match.params.gameId);
  }
  render() {
    const { game } = this.props;
    console.log("tobe passed",game)
    return (
      <>
      <h2>{game.title}</h2>
      <div id='singleGame'>
      <div id='gameDetails'>

        <h4>Published:{game.year}</h4>
        <p><strong>Minimum players:</strong> {game.minPlayer}</p>
        <p><strong>Maximum players:</strong> {game.maxPlayer}</p>
        <strong>Tags:</strong>
        <ul>
        {game.tags.split(';').map((tag,index)=><li key={index}>{tag}</li>)}
        </ul>
        </div>
        <Update {...game}/>
      </div>
      </>
    );
  }
}

const stateProp = (state) => ({ game: state.singleGame });
const dispatchProp = (dispatch) => ({
  loadGame: (id) => dispatch(fetchGame(id)),
});

export default connect(stateProp, dispatchProp)(SingleGame);
