import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import {
  Budget,
  DayRangeFilter,
  LatestOrders,
  LatestProducts,
  LatestSales,
  TasksProgress,
  TotalProfit,
  TotalUsers,
  UsersByDevice,
  VenuesDropdown
} from './components'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}))

const Dashboard = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={4} justify="flex-start">
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <VenuesDropdown></VenuesDropdown>
        </Grid>
        <DayRangeFilter></DayRangeFilter>
      </Grid>

      <Grid container spacing={4} justify="center">
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <Budget />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalUsers />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TasksProgress />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <TotalProfit />
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <UsersByDevice />
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <LatestSales />
        </Grid>

        <Grid item lg={4} md={6} xl={3} xs={12}>
          <LatestProducts />
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <LatestOrders />
        </Grid>
      </Grid>
    </div>
  )
}

export default Dashboard
