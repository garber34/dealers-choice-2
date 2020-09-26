import React from 'react'
import {connect} from 'react-redux'
import Form from './Form'
import axios from 'axios'
import {addGame} from '../store/gamelist'


class Create extends React.Component{
  constructor(){
    super();
    this.state = {
      title:'',
      year:'',
      minPlayer:'',
      maxPlayer:'',
      tags:''
    }
    this.submit=this.submit.bind(this)
    this.change=this.change.bind(this)
    this.cancel = this.cancel.bind(this);
  }

  change(ev) {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  cancel(){
    this.props.history.push('/games')
  }

  async submit(ev){
    ev.preventDefault();
    console.log("about to post",this.state)
    const {data} = await axios.post('/api/games',this.state)
    this.props.addGame(data)
    this.props.history.push('/games')

  }

  render(){return (
  <>
  <h1>Did you buy a new game?</h1>
  <Form {...this.state} submit={this.submit} change={this.change} cancel={this.cancel}/>
  </>
  )}


}


const dispatchProp = dispatch => ({
  addGame:(game)=>dispatch(addGame(game))
})

export default connect(null,dispatchProp)(Create)
