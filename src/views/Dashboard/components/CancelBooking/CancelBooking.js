import React from 'react'
import { Grid, Box } from '@material-ui/core'
import CancelBookingNumber from './components/CancelBookingNumber'
import CancelBookingReasons from './components/CancelBookingReasons'
import { makeStyles } from '@material-ui/styles'
import { useSelector } from 'react-redux'
import Skeleton from '@material-ui/lab/Skeleton'

const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(4)
  }
}))

const CancelBooking = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={4} justify="flex-start">
        <Grid item xs={12}>
          <CancelBookingNumber></CancelBookingNumber>
        </Grid>
        <Grid item xs={12}>
          <CancelBookingReasons></CancelBookingReasons>
        </Grid>
      </Grid>
    </div>
  )
}

export default CancelBooking
