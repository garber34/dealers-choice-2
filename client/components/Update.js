import React from "react";
import { connect } from "react-redux";
import Form from "./Form";
import axios from "axios";
import { updateGame, deleteGame } from "../store/gamelist";
import { __RouterContext } from "react-router";

class Update extends React.Component {
  constructor(props) {
    super();
    console.log("initial props", props);
    this.state = {
      title: "",
      year: "",
      minPlayer: "",
      maxPlayer: "",
      tags: "",
    };
    this.submit = this.submit.bind(this);
    this.change = this.change.bind(this);
    this.backToList = this.backToList.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidUpdate(prevProps) {
    {
      if (
        this.props.title !== prevProps.title &&
        this.props.year !== prevProps.year &&
        this.props.minPlayer !== prevProps.minPlayer &&
        this.props.maxPlayer !== prevProps.maxPlayer &&
        this.props.tags !== prevProps.tags
      ) {
        console.log("prevProps", prevProps);
        console.log("cur prop",this.props)
        const { title, year, minPlayer, maxPlayer, tags } = this.props;
        this.setState({
          title: title,
          year: year,
          minPlayer: minPlayer,
          maxPlayer: maxPlayer,
          tags: tags,
        });
      }
    }
  }

  change(ev) {
    this.setState({
      [ev.target.name]: ev.target.value,
    });
  }

  delete(){
    this.props.deleteGame(this.props.id)
    this.backToList()
  }

  async submit(ev) {
    ev.preventDefault();
    const {data } = await axios.put(`/api/games/${this.props.id}`, this.state);
    this.props.updateGame(data);
    this.backToList()
  }

  backToList(){
    window.location.hash='/games'
  }

  render() {
    console.log("state", this.state);
    return (
      <div id='form'>
    <Form {...this.state} submit={this.submit} change={this.change} cancel={this.backToList}/>
    <button onClick={this.delete}>Delete</button>
    </div>
    )
  }
  }


const dispatchProp = (dispatch) => ({
  updateGame: (game) => dispatch(updateGame(game)),
  deleteGame: (game) => dispatch(deleteGame(game))
});

export default connect(null, dispatchProp)(Update);
