import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router'
import { HashRouter, MemoryRouter, BrowserRouter } from 'react-router-dom'

import 'typeface-roboto'
import { withStyles } from 'material-ui/styles'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import CssBaseline from 'material-ui/CssBaseline'
import green from 'material-ui/colors/green'
import Snackbar from 'material-ui/Snackbar'

import Bgm from 'components/Bgm'

import { App } from 'stores'

const Admin = asyncComponent(() => import('containers/Admin'))
const Home = asyncComponent(() => import('containers/Home'), () => import('containers/Scene1'))
const Scene1 = asyncComponent(() => import('containers/Scene1'), () => import('containers/Scene2'))
const Scene2 = asyncComponent(() => import('containers/Scene2'), () => import('containers/Scene3'))
const Scene3 = asyncComponent(() => import('containers/Scene3'), () => import('containers/Scene4'))
const Scene4 = asyncComponent(() => import('containers/Scene4'), () => import('containers/Share'))
const Share = asyncComponent(() => import('containers/Share'), () => import('containers/Ticket'))
const Ticket = asyncComponent(() => import('containers/Ticket'))

const theme = createMuiTheme({
  palette: {
    primary: green
  },
})

const styles = {
  message: {
    margin: 'auto'
  }
}

class Comp extends React.Component {
  handleClose = event => {
    const { dispatch } = this.props
    dispatch(App.update({
      message: ''
    }))
  }
  render() {
    const { classes, app } = this.props
    const RootRouter = window.location.href.indexOf('#') >= 0 ? HashRouter : BrowserRouter

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Snackbar
          SnackbarContentProps={{classes}}
          open={!!app.message}
          onClose={this.handleClose}
          message={app.message}
        />
        <RootRouter>
          <Switch>
            <Route path="/admin" component={Admin} exact />
            <Route render={() => (
              <React.Fragment>
                <Bgm />
                <MemoryRouter>
                  <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/scene1" component={Scene1} exact />
                    <Route path="/scene2" component={Scene2} exact />
                    <Route path="/scene3" component={Scene3} exact />
                    <Route path="/scene4" component={Scene4} exact />
                    <Route path="/share" component={Share} exact />
                    <Route path="/ticket" component={Ticket} exact />
                    <Route component={Home} />
                  </Switch>
                </MemoryRouter>
              </React.Fragment>
            )} />
          </Switch>
        </RootRouter>
      </MuiThemeProvider>
    )
  }
}

function asyncComponent(load, preLoad) {
  return class AsyncComponent extends React.Component {
    state = {
      Component: null,
      PreloadComponent: null,
    }

    componentWillMount() {
      if (load && !this.state.Component) {
        load()
        .then(({default: Component}) => {
          this.setState({ Component })
        })
      }
      if (preLoad && !this.state.PreloadComponent) {
        preLoad()
        .then(({default: PreloadComponent}) => {
          this.setState({ PreloadComponent })
        })
      }
    }
    
    render() {
      const { Component, PreloadComponent } = this.state

      return (
        <React.Fragment>
          {Component ? <Component {...this.props} /> : null}
          {PreloadComponent ? (
            <div style={{ display: 'none' }}>
              <PreloadComponent {...this.props} />
            </div>
          ) : null}
        </React.Fragment>
      )
    }
  }
}

export default withStyles(styles)(connect(state => state)(Comp))
