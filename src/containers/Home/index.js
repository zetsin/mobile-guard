import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'

import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'

import media from 'media'
import ImageLoader from 'components/ImageLoader'
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
    maxWidth: 350,
    width: '100%',
    left: 0,
    right: 0,
    margin: 'auto',
    background: `url(${media.home.desc})`,
    backgroundSize: '100% 100%',
    padding: '150px 80px 20px',
    bottom: 100,
  },
  input: {
    width: '100%',
    fontSize: 20,
    background: 'none',
    border: 'none',
    zIndex: 99,
    textAlign: 'center',
    '&::placeholder': {
      fontSize: 18
    }
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
  placeholder = '输入你的姓名'
  state = {
    placeholder: this.placeholder
  }
  handleFocus = focus => event => {
    this.setState({
      placeholder: focus ? '' : this.placeholder
    })
  }
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
    const { placeholder } = this.state

    return (
      <ImageLoader images={media.home} component={Stage}>
        <QueueAnim key="robber" type="left" delay={1000} duration={1000} component="span">
          <img key="robber" alt="robber" src={media.home.robber} className={classes.robber} />
        </QueueAnim>
        <QueueAnim key="desc" type="scale" delay={2000} duration={1000} component="span">
          <div key="desc" className={classes.desc}>
            <input rows="5" placeholder={placeholder} value={app.name} className={classes.input} onFocus={this.handleFocus(true)} onBlur={this.handleFocus(false)} onChange={this.handleChange} ref={el => this.input = el} />
          </div>
        </QueueAnim>
        <QueueAnim key="phone" type="top" delay={2000} duration={1000} component="span">
          <TweenOne key="phone" animation={{ y: "-10%", yoyo: true, repeat: -1, type: 'from', duration: 1555 }} component="img" alt="phone" src={media.home.phone} className={classes.phone} />
        </QueueAnim>
        <QueueAnim key="me" type="right" delay={1000} duration={1000} component="span">
          <img key="me" alt="me" src={media.home.me} className={classes.me} />
        </QueueAnim>
        <QueueAnim key="go" type="bottom" delay={3000} duration={1000} component="span">
          <TweenOne key="go" animation={{ scale: 1.1, yoyo: true, repeat: -1, type: 'from', duration: 955 }} component="img" alt="go" src={media.home.go} className={classes.go} onClick={this.handleClick} />
        </QueueAnim>
        <QueueAnim key="logo" type="scaleBig" delay={0} duration={1000} component="span">
          <TweenOne key="logo" animation={{ scale: 1.1, yoyo: true, repeat: -1, type: 'from', duration: 1000 }} component="img" alt="logo" src={media.home.logo} className={classes.logo} />
        </QueueAnim>
      </ImageLoader>
    )
  }
}

export default withStyles(styles)(connect(state => state)(Comp))
