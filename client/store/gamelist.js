import axios from 'axios'

//action types
const SET_GAMES = 'SET_GAMES'
const ADD_GAME = 'ADD_GAME'
const UPDATE_GAME = 'UPDATE_GAME'
const DELETE_GAME = 'DELETE_GAME'

//action creators
const setGames = (games)=>{
return {
  type:SET_GAMES,
  games
}
}

export const addGame = (game) => {
  return {
    type:ADD_GAME,
    game
  }
}

export const updateGame =(game)=>{
  return{
    type:UPDATE_GAME,
    game
  }
}

const removeGame =(id)=>{
  return{
    type:DELETE_GAME,
    id
  }
}

//thunk creators
export function fetchGames(){
  return async function(dispatch){
    try {
      const {data}= await axios.get('/api/games')
      dispatch(setGames(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export function deleteGame(id){
  return async function(dispatch){
    try {
      await axios.delete(`/api/games/${id}`)
      dispatch(removeGame(id))
    } catch (error) {
      console.log(error)
    }
  }
}

//reducer

export default function(state=[],action){
  switch(action.type){
    case SET_GAMES:
      return action.games
    case ADD_GAME:
      return [action.game,...state]
    case UPDATE_GAME:
      const unmodifiedGames = state.filter(game => game.id!==action.game.id)
      return [action.game,...unmodifiedGames]
    case DELETE_GAME:
      return state.filter(game => game.id!==action.id)
    default: return state
  }

}
