import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'

import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'

import window from 'images/scene1/window.png'
import me from 'images/scene1/me.png'
import shadow from 'images/scene1/shadow.png'
import desc from 'images/scene1/desc.png'
import question from 'images/question.png'
import answer1 from 'images/scene1/answer1.png'
import answer2 from 'images/scene1/answer2.png'
import answer3 from 'images/scene1/answer3.png'

import { App } from 'stores'

const styles = {
  window: {
    position: 'absolute',
    width: '100%',
    top: 0,
  },
  me: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  shadow: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  modal: {
    position: 'absolute',
    width: '100%',
    top: 0,
    bottom: 0,
    background: '#000000aa'
  },
  desc: {
    position: 'absolute',
    width: '100%',
    top: 0
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
  handleClick = score => event => {
    const { dispatch, history } = this.props
    dispatch(App.answer(0, score))
    history.push('./scene2')
  }
  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
        <QueueAnim key="window" type="scale" delay={0} duration={2000} component="span">
          <img key="window" alt="window" src={window} className={classes.window} />
        </QueueAnim>
        <QueueAnim key="me" type="scaleBig" delay={0} duration={2000} component="span">
          <img key="me" alt="me" src={me} className={classes.me} />
        </QueueAnim>
        <QueueAnim key="shadow" type="bottom" delay={2000} duration={3000} component="span">
          <TweenOne key="shadow" animation={{ scale: 1.1, opacity: 0.8, blur: '10px', yoyo: true, repeat: -1, type: 'from', duration: 1555 }} component="img" alt="shadow" src={shadow} className={classes.shadow} />
        </QueueAnim>
        <QueueAnim key="modal" type="alpha" delay={5000} duration={1000} component="span">
          <div key="modal" alt="modal" className={classes.modal} />
        </QueueAnim>
        <QueueAnim key="desc" type="top" delay={5000} duration={2000} component="span">
          <img key="desc" alt="desc" src={desc} className={classes.desc} />
        </QueueAnim>
        <QueueAnim key="question" type="scaleBig" delay={7000} duration={1000} component="span">
          <TweenOne key="question" animation={{ scale: 0.9, yoyo: true, repeat: -1, type: 'from', duration: 1000 }} component="img" alt="question" src={question} className={classes.question} />
        </QueueAnim>
        <QueueAnim key="answer1" type="bottom" delay={8000} duration={1000} component="span">
          <img key="answer1" alt="answer1" src={answer1} className={classes.answer1} onClick={this.handleClick(1)} />
        </QueueAnim>
        <QueueAnim key="answer2" type="bottom" delay={9000} duration={1000} component="span">
          <img key="answer2" alt="answer2" src={answer2} className={classes.answer2} onClick={this.handleClick(2)} />
        </QueueAnim>
        <QueueAnim key="answer3" type="bottom" delay={10000} duration={1000} component="span">
          <img key="answer3" alt="answer3" src={answer3} className={classes.answer3} onClick={this.handleClick(3)} />
        </QueueAnim>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(connect(state => state)(Comp))
