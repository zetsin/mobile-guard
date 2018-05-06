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
  corner: {
    position: 'absolute',
    width: '100%',
    top: 0,
  },
  me: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  hand: {
    position: 'absolute',
    width: '100%',
    right: 0,
    bottom: 0,
  },
  light: {
    position: 'absolute',
    width: '100%',
    right: 0,
    bottom: 0,
  },
  speechless: {
    position: 'absolute',
    width: '100%',
    top: 0,
  },
  black: {
    position: 'absolute',
    width: '100%',
    top: 0,
  },
  modal: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  desc: {
    position: 'absolute',
    width: '100%',
    top: 0,
  },
  question: {
    position: 'absolute',
    width: '100%',
    top: 0,
  },
  answer1: {
    position: 'absolute',
    width: '100%',
    bottom: '30%',
  },
  answer2: {
    position: 'absolute',
    width: '100%',
    bottom: '18%',
  },
  answer3: {
    position: 'absolute',
    width: '100%',
    bottom: '6%',
  },
}

class Comp extends React.Component {
  state = {
    loaded: 0
  }
  handleLoad = event => {
    this.setState({
      loaded: this.state.loaded + 1
    })
  }
  handleClick = score => event => {
    const { dispatch, history } = this.props
    dispatch(App.answer(1, score))
    history.push('./scene3')
  }
  render() {
    const { classes } = this.props

    return (
      <ImageLoader loads={media.scene2} preloads={media.scene3} component={Stage}>
        <QueueAnim key="corner" type="scaleBig" delay={0} duration={1000} component="span">
          <img key="corner" alt="corner" src={media.scene2.corner} className={classes.corner} />
        </QueueAnim>
        <QueueAnim key="me" type="left" delay={0} duration={1000} component="span">
          <img key="me" alt="me" src={media.scene2.me} className={classes.me} />
        </QueueAnim>
        <QueueAnim key="hand" type="bottom" delay={1000} duration={1000} component="span">
          <TweenOne key="hand" animation={{ right: '20%', yoyo: true, repeat: -1, type: 'from', duration: 1555 }} component="img" alt="hand" src={media.scene2.hand} className={classes.hand} />
        </QueueAnim>
        <QueueAnim key="black" type="top" delay={2000} duration={1000} component="span">
          <TweenOne key="black" animation={{ y: '-10%', scale: 1.1, blur: '10px', yoyo: true, repeat: -1, type: 'from', duration: 1255 }} component="img" alt="black" src={media.scene2.black} className={classes.black} />
        </QueueAnim>
        <QueueAnim key="speechless" type="bottom" delay={2000} duration={1000} component="span">
          <img key="speechless" alt="speechless" src={media.scene2.speechless} className={classes.speechless} />
        </QueueAnim>
        <QueueAnim key="light" type="right" delay={3000} duration={1000} component="span">
          <TweenOne key="light" animation={{ blur: '20px', yoyo: true, repeat: -1, type: 'from', duration: 855 }} component="img" alt="light" src={media.scene2.light} className={classes.light} />
        </QueueAnim>
        <QueueAnim key="modal" type="alpha" delay={4000} duration={1000} component="span">
          <img key="modal" alt="modal" src={media.modal} className={classes.modal} />
        </QueueAnim>
        <QueueAnim key="desc" type="top" delay={4000} duration={2000} component="span">
          <img key="desc" alt="desc" src={media.scene2.desc} className={classes.desc} />
        </QueueAnim>
        <QueueAnim key="question" type="scaleBig" delay={6000} duration={1000} component="span">
          <TweenOne key="question" animation={{ scale: 0.9, yoyo: true, repeat: -1, type: 'from', duration: 1000 }} component="img" alt="question" src={media.question} className={classes.question} />
        </QueueAnim>
        <QueueAnim key="answer1" type="bottom" delay={7000} duration={1000} component="span">
          <img key="answer1" alt="answer1" src={media.scene2.answer1} className={classes.answer1} onClick={this.handleClick(2)} />
        </QueueAnim>
        <QueueAnim key="answer2" type="bottom" delay={8000} duration={1000} component="span">
          <img key="answer2" alt="answer2" src={media.scene2.answer2} className={classes.answer2} onClick={this.handleClick(1)} />
        </QueueAnim>
        <QueueAnim key="answer3" type="bottom" delay={9000} duration={1000} component="span">
          <img key="answer3" alt="answer3" src={media.scene2.answer3} className={classes.answer3} onClick={this.handleClick(3)} />
        </QueueAnim>
      </ImageLoader>
    )
  }
}

export default withStyles(styles)(connect(state => state)(Comp))
