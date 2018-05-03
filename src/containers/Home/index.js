import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'

import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'

import logo from 'assets/home/logo.png'
import robber from 'assets/home/robber.png'
import phone from 'assets/home/phone.png'
import me from 'assets/home/me.png'
import desc from 'assets/home/desc.png'
import go from 'assets/home/go.png'

import Preload from 'components/Preload'
import Stage from 'components/Stage'

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
    top: 0,
  },
  phone: {
    position: 'absolute',
    width: '100%',
    top: 0
  },
  me: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    pointerEvents: 'none',
  },
  desc: {
    position: 'absolute',
    width: 350,
    left: 0,
    right: 0,
    margin: 'auto',
    background: `url(${desc})`,
    backgroundSize: '100% 100%',
    padding: '170px 80px 25px',
    bottom: 100,
  },
  input: {
    width: '100%',
    fontSize: 22,
    background: 'none',
    border: 'none',
    zIndex: 99,
    textAlign: 'center',
  },
  go: {
    position: 'absolute',
    width: '20%',
    left: 0,
    right: 0,
    margin: 'auto',
    bottom: 20,
  },
}

class Comp extends React.Component {
  handleChange = event => {
    const { dispatch } = this.props
    dispatch(App.update({
      name: event.target.value
    }))
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
      <Preload images={[ logo, me, robber, phone, desc, go ]} component={Stage}>
        <QueueAnim key="robber" type="left" delay={1000} duration={1000} component="span">
          <img key="robber" alt="robber" src={robber} className={classes.robber} />
        </QueueAnim>
        <QueueAnim key="desc" type="scale" delay={2000} duration={1000} component="span">
          <div key="desc" className={classes.desc}>
            <input rows="5" placeholder="输入你的姓名" value={app.name} className={classes.input} onChange={this.handleChange} ref={el => this.input = el} />
          </div>
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
        <QueueAnim key="logo" type="scaleBig" delay={0} duration={1000} component="span">
          <TweenOne key="logo" animation={{ scale: 1.1, yoyo: true, repeat: -1, type: 'from', duration: 1000 }} component="img" alt="logo" src={logo} className={classes.logo} />
        </QueueAnim>
      </Preload>
    )
  }
}

export default withStyles(styles)(connect(state => state)(Comp))
