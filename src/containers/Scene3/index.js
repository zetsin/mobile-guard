import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'

import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'

import parents from 'images/scene3/parents.png'
import talking from 'images/scene3/talking.png'
import door from 'images/scene3/door.png'
import me from 'images/scene3/me.png'
import desc from 'images/scene3/desc.png'
import question from 'images/question.png'
import answer1 from 'images/scene3/answer1.png'
import answer2 from 'images/scene3/answer2.png'
import answer3 from 'images/scene3/answer3.png'

import { App } from 'stores'

const styles = {
  parents: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  talking: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  door: {
    position: 'absolute',
    width: '100%',
    top: 0,
  },
  me: {
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
    dispatch(App.answer(2, score))
    history.push('./scene4')
  }
  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
      <QueueAnim key="door" type="top" delay={0} duration={1000} component="span">
        <TweenOne key="door" animation={{ blur: "3px", yoyo: true, repeat: -1, duration: 1555 }} component="img" alt="door" src={door} className={classes.door} />
      </QueueAnim>
      <QueueAnim key="me" type="scale" delay={3000} duration={2000} component="span">
        <TweenOne key="me" animation={{ y: '-10%', yoyo: true, repeat: -1, type: 'from', duration: 955, repeatDelay: 500, ease: TweenOne.easing.path('M0,100 L25,100 C34,20 40,0 100,0') }} component="img" alt="me" src={me} className={classes.me} />
      </QueueAnim>
        <QueueAnim key="talking" type="bottom" delay={1000} duration={2000} component="span">
          <TweenOne key="talking" animation={{ scale: 1.1, yoyo: true, repeat: -1, type: 'from', duration: 1255 }} component="img" alt="talking" src={talking} className={classes.talking} />
        </QueueAnim>
        <QueueAnim key="parents" type="bottom" delay={0} duration={1000} component="span">
          <img key="parents" alt="parents" src={parents} className={classes.parents} />
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
