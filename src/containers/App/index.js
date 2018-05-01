import React from 'react'
import { Switch, Route } from 'react-router-dom'
import 'typeface-roboto'

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

const theme = createMuiTheme({
  palette: {
    primary: green
  },
})

class Comp extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Switch key='switch'>
          <Route path="/" component={Home} exact />
          <Route path="/scene1" component={Scene1} exact />
          <Route path="/scene2" component={Scene2} exact />
          <Route path="/scene3" component={Scene3} exact />
          <Route path="/scene4" component={Scene4} exact />
          <Route path="/share" component={Share} exact />
          <Route path="/ticket" component={Ticket} exact />
        </Switch>
      </MuiThemeProvider>
    )
  }
}

export default Comp
