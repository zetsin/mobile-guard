import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'

import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

import QueueAnim from 'rc-queue-anim'

const styles = {
  root: {
    padding: 24
  },
  head: {
    textAlign: 'center'
  }
}

class Comp extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <QueueAnim className={classes.root}>
        <div key="head" className={classes.head}>
          <Typography variant="headline">
            爸妈又想偷看我手机了！
          </Typography>
          <Typography variant="headline">
            十多年斗智斗勇
          </Typography>
          <Typography variant="headline">
            你的手机隐私保护修练到几级？
          </Typography>
        </div>
        <TextField key="name" label="输入姓名" fullWidth margin="normal" />
        <Button key="start"  variant="raised" color="primary" fullWidth component={Link} to="/scene">
          开始战斗吧！
        </Button>
      </QueueAnim>
    )
  }
}

export default withStyles(styles)(connect(state => state)(Comp))
