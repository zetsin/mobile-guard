import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'

import Preload from 'components/Preload'

import ticket from 'images/ticket/main.png'
import Stage from 'components/Stage'

const styles = {
  ticket: {
    width: '100%'
  },
}

class Comp extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <Preload images={[ticket]} component={Stage} style={{ height: 'initial' }}>
        <img key="ticket" alt="ticket" src={ticket} className={classes.ticket} />
      </Preload>
    )
  }
}

export default withStyles(styles)(connect(state => state)(Comp))
