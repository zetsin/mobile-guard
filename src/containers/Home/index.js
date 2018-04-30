import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'

import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'

import logo from 'images/home/logo.png'
import robber from 'images/home/robber.png'
import phone from 'images/home/phone.png'
import me from 'images/home/me.png'
import desc from 'images/home/desc.png'
import go from 'images/home/go.png'

import Preload from 'components/Preload'

import { App } from 'stores'

const styles = {
  logo: {
    position: 'absolute',
    width: '100%',
    top: 0,
  },
  robber: {
    position: 'absolute',
    width: '100%',
    bottom: '20%',
  },
  phone: {
    position: 'absolute',
    width: '100%',
    bottom: 0
  },
  me: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  desc: {
    position: 'absolute',
    width: '100%',
    bottom: '20%',
  },
  name: {
    position: 'absolute',
    width: '20%',
    left: 0,
    right: 0,
    margin: 'auto',
    bottom: '25%',
    fontSize: 25,
    zIndex: 999,
    background: 'none',
    border: 'none',
  },
  go: {
    position: 'absolute',
    width: '30%',
    left: 0,
    right: 0,
    margin: 'auto',
    bottom: '5%',
  },
}

class Comp extends React.Component {
  handleChange = event => {
    const { dispatch } = this.props
    dispatch(App.sign(event.target.value))
  }
  handleClick = event => {
    const { history, app } = this.props
    if(app.name) {
      history.push('./scene1')
    }
    else {
      this.input.focus()
    }
  }
  render() {
    const { classes, app } = this.props

    return (
      <Preload images={[ logo, me, robber, phone, desc, go ]}>
        <QueueAnim key="robber" type="left" delay={1000} duration={1000} component="span">
          <img key="robber" alt="robber" src={robber} className={classes.robber} />
        </QueueAnim>
        <QueueAnim key="desc" type="left" delay={1000} duration={1000} component="span">
          <img key="desc" alt="desc" src={desc} className={classes.desc} />
        </QueueAnim>
        <QueueAnim key="phone" type="top" delay={2000} duration={1000} component="span">
          <TweenOne key="phone" animation={{ y: "-10%", yoyo: true, repeat: -1, type: 'from', duration: 1555 }} component="img" alt="phone" src={phone} className={classes.phone} />
        </QueueAnim>
        <QueueAnim key="me" type="right" delay={1000} duration={1000} component="span">
          <img key="me" alt="me" src={me} className={classes.me} />
        </QueueAnim>
        <QueueAnim key="go" type="bottom" delay={3000} duration={1000} component="span">
          <TweenOne key="go" animation={{ scale: 1.1, yoyo: true, repeat: -1, type: 'from', duration: 955 }} component="img" alt="go" src={go} className={classes.go} onClick={this.handleClick} />
        </QueueAnim>
        <QueueAnim key="logo" type="scale" delay={0} duration={1000} component="span">
          <TweenOne key="logo" animation={{ scale: 1.1, yoyo: true, repeat: -1, type: 'from', duration: 1000 }} component="img" alt="logo" src={logo} className={classes.logo} />
        </QueueAnim>
          <input type="text" key="name" value={app.name} className={classes.name} onChange={this.handleChange} ref={el => this.input = el} />
      </Preload>
    )
  }
}

export default withStyles(styles)(connect(state => state)(Comp))
