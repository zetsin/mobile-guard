import React from 'react'

import IconButton from 'material-ui/IconButton'
import VolumeOff from '@material-ui/icons/VolumeOff'
import VolumeUp from '@material-ui/icons/VolumeUp'

import bgm from 'assets/bgm.mp3'

class Comp extends React.Component {
  state = {
    playing: true
  }
  handleClick = event => {
    const { playing } = this.state
    if(playing) {
      this.audio.pause()
    }
    else {
      this.audio.play()
    }
    this.setState({
      playing: !playing
    })
  }
  render() {
    const { playing } = this.state

    return (
      <React.Fragment>
        <audio src={bgm} autoPlay="autoplay" loop="loop" ref={el => this.audio = el} />
        <IconButton style={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 999,
          color: '#fff',
          background: '#666',
          opacity: 0.6
        }} onClick={this.handleClick}>
          {playing ? <VolumeUp /> : <VolumeOff />}
        </IconButton>
      </React.Fragment>
    )
  }
  componentDidMount() {
    const { playing } = this.state

    document.addEventListener("WeixinJSBridgeReady", () => {
      if(playing) {
        this.audio.play()
      }
    }, false)
  }
}

export default Comp
