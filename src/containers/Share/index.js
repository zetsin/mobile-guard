import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'

import TweenOne from 'rc-tween-one'

import Preload from 'components/Preload'
import Stage from 'components/Stage'

import result1 from 'assets/share/result1.png'
import result2 from 'assets/share/result2.png'
import result3 from 'assets/share/result3.png'
import result4 from 'assets/share/result4.png'
import photo1 from 'assets/share/photo1.png'
import photo2 from 'assets/share/photo2.png'
import photo3 from 'assets/share/photo3.png'
import photo4 from 'assets/share/photo4.png'
import story from 'assets/share/story.png'
import button from 'assets/share/button.png'
import left from 'assets/share/left.png'
import right from 'assets/share/right.png'

import { App } from 'stores'

const styles = {
  hidden: {
    display: 'none'
  },
  result: {
    width: '100%'
  },
  photo: {
    position: 'absolute',
    width: '100%',
    left: 0,
    right: 0,
    opacity: 0
  },
  story: {
    width: '100%',
    background: `url(${story})`,
    backgroundSize: '100% 100%',
    padding: '3% 12%'
  },
  textarea: {
    width: '100%',
    fontSize: 16,
    background: 'none',
    border: 'none'
  },
  left: {
    width: '100%'
  },
  button: {
    width: '100%'
  },
  right: {
    width: '100%'
  },
}

class Comp extends React.Component {
  handleLoad = (ref, score) => event => {
    const { app } = this.props

    let text = app.name || "姓名"

    this.canvas.width = event.target.width
    this.canvas.height = event.target.height

    const context = this.canvas.getContext("2d")
    context.drawImage(event.target, 0, 0)

    context.font = '28px Helvetica,Arial'
    context.fillStyle = 'black'
    while(context.measureText(text).width > 120) {
      text = text.slice(0, text.length - 1)
    }
    context.fillText(text, 170 - context.measureText(text).width / 2, 1015)

    context.font = '50px Helvetica,Arial'
    context.fillStyle = 'black'
    context.fillText(text, (this.canvas.width - context.measureText(text).width) / 2, (score >= 11) ? 550 : 600)

    this[ref].src = this.canvas.toDataURL("image/png")
  }
  handleChange = event => {
    const { dispatch } = this.props
    dispatch(App.update({
      story: event.target.value
    }))
  }
  handleClick = event => {
    const { dispatch, history } = this.props
    dispatch(App.share())
    history.push('./ticket')
  }
  render() {
    const { classes, app } = this.props

    const score = app.scores.reduce((a, b) => a + b, 0)
    let result = result4
    let photo = photo4
    if(score >= 11) {
      result = result1
      photo = photo1
    }
    else if(score >= 9 && score <= 10) {
      result = result2
      photo = photo2
    }
    else if(score >= 7 && score <= 8) {
      result = result3
      photo = photo3
    }

    return (
      <Preload images={[story, left, button, right, result, photo]} component={Stage} style={{ height: 'initial' }}>
        <Grid container>
          <Grid item xs={12}>
            <div style={{
              position: 'relative'
            }}>
              <canvas className={classes.hidden} ref={el => this.canvas = el} />
              <img alt="img" src={result} className={classes.hidden} onLoad={this.handleLoad('result', score)} />
              <img alt="img" src={result} className={classes.result} ref={el => this.result = el} />
              <img alt="img" src={photo} className={classes.hidden} onLoad={this.handleLoad('photo', score)} />
              <img alt="img" src={photo} className={classes.photo} ref={el => this.photo = el} />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.story}>
              <textarea rows="5" placeholder="还有更多与父母不得不说、一言难尽的故事？欢迎吐槽" value={app.story} className={classes.textarea} onChange={this.handleChange} />
            </div>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={3}>
                <TweenOne animation={{ x: '-10%', yoyo: true, repeat: -1, type: 'from', duration: 1000 }} component="img" alt="left" src={left} className={classes.left} />
              </Grid>
              <Grid item xs={6}>
                <TweenOne animation={{ scale: 0.9, yoyo: true, repeat: -1, type: 'from', duration: 1000 }} component="img" alt="button" src={button} className={classes.button} onClick={this.handleClick} />
              </Grid>
              <Grid item xs={3}>
                <TweenOne animation={{ x: '10%', yoyo: true, repeat: -1, type: 'from', duration: 1000 }} component="img" alt="right" src={right} className={classes.right} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Preload>
    )
  }
}

export default withStyles(styles)(connect(state => state)(Comp))
