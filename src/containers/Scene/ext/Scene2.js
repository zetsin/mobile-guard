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
      'A. 开玩笑地说“妈，你不会想偷看我的密码吧”？',
      'B. 换个时间自己偷偷输密码',
      'C. “别瞅了，密码是我idol的生日，不是你的！”'
    ]

    return (
      <QueueAnim>
        <div key="question" className={classes.head}>
          <Typography variant="headline">
            点亮手机
          </Typography>
          <Typography variant="headline">
            指纹识别失效
          </Typography>
          <Typography variant="headline">
            正要输密码
          </Typography>
          <Typography variant="headline">
            手被盯得发烫
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
