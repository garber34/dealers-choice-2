import axios from 'axios'

///action types
const SET_SINGLE_GAME = 'SET__SINGLE_GAME'

//action creators
function setSingleGame(game){
  return {
    type:SET_SINGLE_GAME,
  game
  }
  }
//thunk creators
export const fetchGame=(id)=>{
  return async function(dispatch){
  const {data}=await axios.get(`/api/games/${id}`)
  dispatch(setSingleGame(data))

}

}

//reducer
const initialState = {id:'',title:"",year:'',minPlayer:'',maxPlayer:'',tags:""}
export default (state = initialState, action) => {
  switch(action.type) {
    case SET_SINGLE_GAME:
      return action.game
    default:
      return state
  }
}
