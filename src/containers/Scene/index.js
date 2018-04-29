import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'

import Scene1 from './ext/Scene1'
import Scene2 from './ext/Scene2'
import Scene3 from './ext/Scene3'
import Scene4 from './ext/Scene4'

import { App } from 'stores'

const scenes = [
  {
    index: 1,
    comp: Scene2,
    from: '/scene/2',
    to: '/scene/3',
  },
  {
    index: 2,
    comp: Scene3,
    from: '/scene/3',
    to: '/scene/4',
  },
  {
    index: 3,
    comp: Scene4,
    from: '/scene/4',
    to: '/share',
  },
  {
    index: 0,
    comp: Scene1,
    from: '',
    to: '/scene/2',
  },
]

const styles = {
  root: {
    padding: 24
  }
}

class Comp extends React.Component {
  render() {
    const { dispatch, classes, history } = this.props

    return (
      <div className={classes.root}>
        <Switch>
          {scenes.map((item, index) => (
            <Route key={index} path={item.from} render={() => {
              const Comp = item.comp
              return (
                <Comp onAnswer={score => {
                  dispatch(App.answer(item.index, score))
                  history.push(item.to)
                }} />
              )
            }} />
          ))}
        </Switch>
      </div>
    )
  }
}

export default withStyles(styles)(Comp)
