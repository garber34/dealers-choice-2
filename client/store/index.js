import {createStore, combineReducers,applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import gameList from './gamelist'
import singleGame from './singlegame'

const reducer = combineReducers({
  gameList,
  singleGame
})

const middleware=applyMiddleware(thunkMiddleware,createLogger({collapsed:true}))

const store=createStore(reducer,middleware)

export default store
