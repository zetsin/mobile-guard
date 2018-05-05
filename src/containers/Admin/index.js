import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import Paper from 'material-ui/Paper'

import { Api } from 'stores'

const styles = {
  root: {
    overflowX: 'auto',
  }
}

class Comp extends React.Component {
  render() {
    const { classes, api } = this.props

    return (
      <Paper className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>姓名</TableCell>
              <TableCell>分数</TableCell>
              <TableCell>故事</TableCell>
              <TableCell>客户端</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {api.rows.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.doc.name}</TableCell>
                <TableCell>{item.doc.scores}</TableCell>
                <TableCell>{item.doc.story}</TableCell>
                <TableCell>{item.doc.userAgent}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    )
  }
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(Api.retrive())
  }
}

export default withStyles(styles)(connect(state => state)(Comp))
