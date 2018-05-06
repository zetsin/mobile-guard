import React from 'react'
import { LinearProgress } from 'material-ui/Progress'

class Comp extends React.Component {
  state = {
    loaded: 0
  }
  handleLoad = event => {
    this.setState({
      loaded: this.state.loaded + 1
    })
  }
  render() {
    const { children, component, loads=[], preloads=[] } = this.props

    const _loads = loads.length === undefined ? Object.values(loads) : loads
    const _preloads = preloads.length === undefined ? Object.values(preloads) : preloads

    const Component = component || React.Fragment

    return this.state.loaded < _loads.length ? (
      <React.Fragment>
        <LinearProgress />
        <div style={{ display: 'none' }}>
          {_loads.map((item, index) => <img key={index} alt="loads" src={item} onLoad={this.handleLoad} />)}
        </div>
      </React.Fragment>
    ): (
      <Component {...(component ? this.props : {})}>
        { children }
        <div style={{ display: 'none' }}>
          {_preloads.map((item, index) => <img key={index} alt="preloads" src={item} />)}
        </div>
      </Component>
    )
  }
}

export default Comp
