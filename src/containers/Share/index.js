import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import Grid from 'material-ui/Grid'

import TweenOne from 'rc-tween-one'
import Preload from 'components/Preload'

import result1 from 'images/share/result1.png'
import result2 from 'images/share/result2.png'
import result3 from 'images/share/result3.png'
import result4 from 'images/share/result4.png'
import desc from 'images/share/desc.png'
import story from 'images/share/story.png'
import button from 'images/share/button.png'
import left from 'images/share/left.png'
import right from 'images/share/right.png'

const styles = {
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: '5% 0',
    overflowX: 'hidden',
    overflowY: 'scroll'
  },
  hidden: {
    display: 'none'
  },
  result: {
    width: '100%'
  },
  canvas: {
    display: 'none'
  },
  desc: {
    width: '100%'
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
  handleLoad = () => {
    const { app } = this.props

    this.canvas.width = this.img.width
    this.canvas.height = this.img.height

    const context = this.canvas.getContext("2d")
    context.drawImage(this.img, 0, 0)
    context.font = '50px Arial'
    context.fillStyle = 'black'
    context.fillText(app.name, (this.canvas.width - context.measureText(app.name).width) / 2, 520)

    this.image.src = this.canvas.toDataURL("image/png")
  }
  handleClick = event => {
    const { dispatch, history } = this.props
    history.push('./ticket')
  }
  render() {
    const { classes, app } = this.props

    const score = app.scores.reduce((a, b) => a + b, 0)
    let result = result4
    if(score >= 11 && score <= 12) {
      result = result1
    }
    else if(score >= 9 && score <= 10) {
      result = result2
    }
    else if(score >= 7 && score <= 8) {
      result = result3
    }

    return (
      <Preload images={[desc, story, left, button, right]}>
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <img alt="result" src={result} className={classes.hidden} ref={el => this.img = el} onLoad={this.handleLoad} />
              <canvas className={classes.canvas} ref={el => this.canvas = el} />
              <img alt="result" src={result} className={classes.result} ref={el => this.image = el} />
            </Grid>
            <Grid item xs={12}>
              <img alt="desc" src={desc} className={classes.desc} />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.story}>
                <textarea rows="5" placeholder="还有更多与父母不得不说、一言难尽的故事？欢迎吐槽" className={classes.textarea} />
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
        </div>
      </Preload>
    )
  }
  componentDidMount = () => {
    console.log(this)
    console.log(this.canvas)
    console.log(this.img)
    // this.canvas.width = this.img.width
    // this.canvas.height = this.img.height
    // this.canvas.getContext("2d").drawImage(this.img, 0, 0)
    // const image = new Image();  
    // image.src = this.canvas.toDataURL("image/png")
    // console.log(image)
    // console.log(image.src)
  }
}

export default withStyles(styles)(connect(state => state)(Comp))
