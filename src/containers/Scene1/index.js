import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import { LinearProgress } from 'material-ui/Progress'

import QueueAnim from 'rc-queue-anim'
import TweenOne from 'rc-tween-one'

import win from 'images/scene1/win.png'
import me from 'images/scene1/me.png'
import shadow from 'images/scene1/shadow.png'
import modal from 'images/modal.png'
import desc from 'images/scene1/desc.png'
import question from 'images/question.png'
import answer1 from 'images/scene1/answer1.png'
import answer2 from 'images/scene1/answer2.png'
import answer3 from 'images/scene1/answer3.png'

import { App } from 'stores'

const images = [
  win,
  me,
  shadow,
  modal,
  desc,
  question,
  answer1,
  answer2,
  answer3
]

const styles = {
  win: {
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
    height: '100%'
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
    dispatch(App.answer(0, score))
    history.push('./scene2')
  }
  render() {
    const { classes } = this.props

    return this.state.loaded === images.length ? (
      <React.Fragment>
        <QueueAnim key="win" type="scale" delay={0} duration={2000} component="span">
          <img key="win" alt="win" src={win} className={classes.win} />
        </QueueAnim>
        <QueueAnim key="me" type="scaleBig" delay={0} duration={2000} component="span">
          <img key="me" alt="me" src={me} className={classes.me} />
        </QueueAnim>
        <QueueAnim key="shadow" type="bottom" delay={2000} duration={3000} component="span">
          <TweenOne key="shadow" animation={{ scale: 1.1, opacity: 0.8, blur: '10px', yoyo: true, repeat: -1, type: 'from', duration: 1555 }} component="img" alt="shadow" src={shadow} className={classes.shadow} />
        </QueueAnim>
        <QueueAnim key="modal" type="alpha" delay={5000} duration={1000} component="span">
          <img key="modal" alt="modal" src={modal} className={classes.modal} />
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
    ): (
      <React.Fragment>
        <LinearProgress color="secondary" />
        <div style={{ display: 'none' }}>
          {images.map((item, index) => <img key={index} alt="preload" src={item} onLoad={this.handleLoad} />)}
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(connect(state => state)(Comp))
