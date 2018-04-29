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
      'A. 火冒三丈，“爸妈！你们干嘛呢？”',
      'B. 翻开爸妈包里的手机，聚精会神地看他们的小秘密',
      'C. 反正有密码保护，让他们试着玩儿呗'
    ]

    return (
      <QueueAnim>
        <div key="question" className={classes.head}>
          <Typography variant="headline">
            洗完澡出来
          </Typography>
          <Typography variant="headline">
            发现父母在掰弄你的手机
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
