import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'

import ImageLoader from 'components/ImageLoader'

import media from 'media'
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
      <ImageLoader loads={media.ticket} component={Stage} style={{ height: 'initial' }}>
        <img key="ticket" alt="ticket" src={media.ticket.main} className={classes.ticket} />
      </ImageLoader>
    )
  }
}

export default withStyles(styles)(connect(state => state)(Comp))
