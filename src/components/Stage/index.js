import React from 'react'

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
    const { children, style={} } = this.props
    return (
      <div ref={el => this.root = el} style={{
        position: 'relative',
        height: this.state.height,
        maxWidth: 414,
        margin: 'auto',
        overflow: 'hidden',
        ...style
      }}>
        {children}
      </div>
    )
  }
  componentDidMount() {
    this.updateDimensions()
    window.addEventListener("resize", this.updateDimensions)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }
}

export default Comp
