import React from 'react'
import { Switch, Route } from 'react-router-dom'
import 'typeface-roboto'

import CssBaseline from 'material-ui/CssBaseline'
import { withStyles } from 'material-ui/styles'

import Home from 'containers/Home'
import Scene1 from 'containers/Scene1'
import Scene2 from 'containers/Scene2'
import Scene3 from 'containers/Scene3'
import Scene4 from 'containers/Scene4'
import Share from 'containers/Share'
import Ticket from 'containers/Ticket'

import background from 'images/background.png'

import Preload from './preload'

const styles = {
  background: {
    position: 'fixed',
    maxWidth: 500,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    overflow: 'hidden',
    margin: 'auto',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover'
  }
}

class Comp extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <CssBaseline />
        <div alt="background" className={classes.background}>
          <Preload />
          <Switch key='switch'>
            <Route path="/" component={Home} exact />
            <Route path="/scene1" component={Scene1} exact />
            <Route path="/scene2" component={Scene2} exact />
            <Route path="/scene3" component={Scene3} exact />
            <Route path="/scene4" component={Scene4} exact />
            <Route path="/share" component={Share} exact />
            <Route path="/ticket" component={Ticket} exact />
          </Switch>
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Comp)
