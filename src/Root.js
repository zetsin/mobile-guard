import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createHashHistory'
import thunk from 'redux-thunk-it'

import stores from 'stores'

const history = createHistory()

const store = createStore(
  combineReducers({
    ...stores,
    router: routerReducer
  }),
  applyMiddleware(thunk, routerMiddleware(history))
)

class Comp extends React.Component {
  render () {
    const { component } = this.props
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Route component={component} />
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default Comp
