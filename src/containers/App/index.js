import React from 'react'
import { Switch, Route } from 'react-router-dom'
import 'typeface-roboto'

import { withStyles } from 'material-ui/styles'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline'
import green from 'material-ui/colors/green'

import Home from 'containers/Home'
import Scene1 from 'containers/Scene1'
import Scene2 from 'containers/Scene2'
import Scene3 from 'containers/Scene3'
import Scene4 from 'containers/Scene4'
import Share from 'containers/Share'
import Ticket from 'containers/Ticket'

import background from 'images/background.png'

const theme = createMuiTheme({
  palette: {
    primary: green
  },
})

const styles = {
  root: {
    position: 'relative',
    maxWidth: 414,
    overflow: 'hidden',
    margin: 'auto',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover'
  }
}

class Comp extends React.Component {
  state = {
    height: window.innerHeight
  }
  updateDimensions = () => {
    const width = this.root.offsetWidth
    let height = window.innerHeight
    const radio = width / height

    if(radio < 0.4) {
      height = width / 0.45
    }
    else if(radio > 0.65) {
      height = width / 0.6
    }
    this.setState({
      height
    })
  }
  render() {
    const { classes } = this.props
    const { height } = this.state
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className={classes.root} ref={el => this.root = el} style={{
          height
        }}>
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
      </MuiThemeProvider>
    )
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
}

export default withStyles(styles)(Comp)
