import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import characters from '../components/CharactersList/redux/reducer'
import header from '../components/Header/redux/reducer'

const appReducer = combineReducers({
  characters,
  header,
})

const store = createStore(appReducer, applyMiddleware(thunk))

export default store
