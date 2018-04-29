import React from 'react'

import { withStyles } from 'material-ui/styles'

import Grid from 'material-ui/Grid'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

import QueueAnim from 'rc-queue-anim'

const styles = {
  head: {
    textAlign: 'center'
  },
  button: {
    height: '100%'
  }
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
      <QueueAnim>
        <div key="question" className={classes.head}>
          <Typography variant="headline">
            微信聊天中
          </Typography>
          <Typography variant="headline">
            老爸在身后偷看聊天窗口
          </Typography>
          <Typography variant="headline">
            此时你该怎么办？
          </Typography>
        </div>
        <Grid key="answer" container spacing={24} component={QueueAnim}>
          {answers.map((item, index) => (
            <Grid item key={index} xs={12} sm={4}>
              <Button variant="raised" color="primary" fullWidth className={classes.button} onClick={() => onAnswer(index + 1)}>
                {item}
              </Button>
            </Grid>
          ))}
        </Grid>
      </QueueAnim>
    )
  }
}

export default withStyles(styles)(Comp)
