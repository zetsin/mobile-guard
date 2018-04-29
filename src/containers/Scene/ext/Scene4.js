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
      'A. “蔡徐坤/新垣结衣啊，我男/女朋友”',
      'B. “啊！灶上还在烧水呢，我去看一眼~”',
      'C. “这是我的事儿，你别管”'
    ]

    return (
      <QueueAnim>
        <div key="question" className={classes.head}>
          <Typography variant="headline">
            每次挂电话总会凑过来问
          </Typography>
          <Typography variant="headline">
            “谁啊？是男是女啊？”
          </Typography>
          <Typography variant="headline">
            此时你该怎么回答？
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
