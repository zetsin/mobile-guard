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
    const { classes, app } = this.props

    return (
      <QueueAnim className={classes.root}>
        <div key="head" className={classes.head}>
          <Typography variant="title">
            {app.name}
          </Typography>
          <Typography variant="headline">
            {app.scores}
          </Typography>
        </div>
        <TextField key="name" label="还有更多与父母不得不说、一言难尽的故事？欢迎吐槽！" helperText="您的故事可能会被用于3ESPACE家庭博物馆。分享故事可以得到博物馆入场券哦~" fullWidth multiline rows="4" margin="normal" />
        <Button key="start"  variant="raised" color="primary" fullWidth component={Link} to="/scene">
          提交
        </Button>
      </QueueAnim>
    )
  }
}

export default withStyles(styles)(connect(state => state)(Comp))
