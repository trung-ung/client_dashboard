import React from 'react'
import { Grid } from '@material-ui/core'
import AverageConfirmedBooking from './AverageConfirmedBooking'
import AverageDelegateCount from './AverageDelegateCount'
import AverageLeadTime from './AverageLeadTime'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(4)
  }
}))

const AverageCount = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={4} justify="flex-start">
        <Grid item xs={12}>
          <AverageConfirmedBooking></AverageConfirmedBooking>
        </Grid>
        <Grid item xs={12}>
          <AverageDelegateCount></AverageDelegateCount>
        </Grid>
        <Grid item xs={12}>
          <AverageLeadTime></AverageLeadTime>
        </Grid>
      </Grid>
    </div>
  )
}

export default AverageCount
