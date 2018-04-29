import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'

import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'

import wall from 'images/scene4/wall.png'
import me from 'images/scene4/me.png'
import talking from 'images/scene4/talking.png'
import light from 'images/scene4/light.png'
import desc from 'images/scene4/desc.png'
import question from 'images/question.png'
import answer1 from 'images/scene4/answer1.png'
import answer2 from 'images/scene4/answer2.png'
import answer3 from 'images/scene4/answer3.png'

import { App } from 'stores'

const styles = {
  wall: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  me: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  talking: {
    position: 'absolute',
    width: '100%',
    top: 0,
  },
  light: {
    position: 'absolute',
    width: '100%',
    top: 0,
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
  handleClick = score => event => {
    const { dispatch, history } = this.props
    dispatch(App.answer(3, score))
    history.push('./share')
  }
  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
        <QueueAnim key="wall" type="right" delay={0} duration={1000} component="span">
          <img key="wall" alt="wall" src={wall} className={classes.wall} />
        </QueueAnim>
        <QueueAnim key="me" type="left" delay={1000} duration={2000} component="span">
          <TweenOne key="me" animation={{ x: '-10%', yoyo: true, repeat: -1, type: 'from', duration: 1555 }} component="img" alt="me" src={me} className={classes.me} />
        </QueueAnim>
        <QueueAnim key="talking" type="top" delay={3000} duration={1000} component="span">
          <img key="talking" alt="talking" src={talking} className={classes.talking} />
        </QueueAnim>
        <QueueAnim key="light" type="scaleBig" delay={7000} duration={1000} component="span">
          <TweenOne key="light" animation={{ scale: 0.9, yoyo: true, repeat: -1, type: 'from', duration: 855 }} component="img" alt="light" src={light} className={classes.light} />
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
