import { combineReducers, thunkActions } from 'redux-thunk-it'

import app from './app'
import api from './api'

export default combineReducers({
  app,
  api,
})

export const App = thunkActions(app)
export const Api = thunkActions(api)