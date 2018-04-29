import React from 'react'

import { withStyles } from 'material-ui/styles'

import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'

import window from './window.png'
import me from './me.png'
import shadow from './shadow.png'
import desc from './desc.png'
import question from './question.png'
import answer1 from './answer1.png'
import answer2 from './answer2.png'
import answer3 from './answer3.png'

const styles = {
  window: {
    position: 'absolute',
    width: '60%',
    top: '5%',
    left: 0,
    right: 0,
    margin: 'auto'
  },
  me: {
    position: 'absolute',
    width: '100%',
    left: 0,
    right: 0,
    bottom: 0,
  },
  shadow: {
    position: 'absolute',
    width: '100%',
    left: 0,
    right: 0,
    bottom: 0,
  },
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: '#00000088'
  },
  desc: {
    position: 'absolute',
    width: '80%',
    top: '5%',
    left: 0,
    right: 0,
    margin: 'auto'
  },
  question: {
    position: 'absolute',
    width: '100%',
    top: '25%',
    left: 0,
    right: 0,
    margin: 'auto'
  },
  answer1: {
    position: 'absolute',
    width: '100%',
    left: 0,
    right: 0,
    bottom: '25%',
  },
  answer2: {
    position: 'absolute',
    width: '100%',
    left: 0,
    right: 0,
    bottom: '15%',
  },
  answer3: {
    position: 'absolute',
    width: '100%',
    left: 0,
    right: 0,
    bottom: '5%',
  },
}

class Comp extends React.Component {
  render() {
    const { classes, onAnswer=()=>{} } = this.props

    const answers = [
      'A. 将手机锁屏让他看不见',
      'B. “爸，朋友圈里你的同事又买新车了呢”',
      'C. 放下手机开始和老爸聊天，趁他不注意再继续'
    ]

    return (
      <React.Fragment>
        <QueueAnim key="window" type="scale" delay={0} duration={2000} component="span">
          <img key="window" alt="window" src={window} className={classes.window} />
        </QueueAnim>
        <QueueAnim key="me" type="scaleBig" delay={0} duration={2000} component="span">
          <img key="me" alt="me" src={me} className={classes.me} />
        </QueueAnim>
        <QueueAnim key="shadow" type="bottom" delay={2000} duration={3000} component="span">
          <TweenOne key="shadow" animation={{ opacity: 0, blur: '20px', yoyo: true, repeat: -1, type: 'from', duration: 1000 }} component="img" alt="shadow" src={shadow} className={classes.shadow} />
          <img key="shadow" alt="shadow" src={shadow} className={classes.shadow} />
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
          <img key="answer1" alt="answer1" src={answer1} className={classes.answer1} />
        </QueueAnim>
        <QueueAnim key="answer2" type="bottom" delay={9000} duration={1000} component="span">
          <img key="answer2" alt="answer2" src={answer2} className={classes.answer2} />
        </QueueAnim>
        <QueueAnim key="answer3" type="bottom" delay={10000} duration={1000} component="span">
          <img key="answer3" alt="answer3" src={answer3} className={classes.answer3} />
        </QueueAnim>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Comp)
