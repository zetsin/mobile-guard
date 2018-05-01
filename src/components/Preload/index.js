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
    const { children, component, images=[] } = this.props

    const Component = component || React.Fragment

    return this.state.loaded < images.length ? (
      <React.Fragment>
        <LinearProgress />
        <div style={{ display: 'none' }}>
          {images.map((item, index) => <img key={index} alt="preload" src={item} onLoad={this.handleLoad} />)}
        </div>
      </React.Fragment>
    ): (
      <Component {...(component ? this.props : {})}>
        { children }
      </Component>
    )
  }
}

export default Comp
